import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AppThunk } from '../hooks';
import type { RootState } from '../store';
import type { AuthorizeUserFormType, BackendUserType, UserFormType } from './userType';

type UserState =
  | { status: 'fetching' }
  | {
      id: number;
      firstName: string;
      lastName: string;
      secondName: string;
      email: string;
      phone: string;
      // hashpass: string;
      roleid?: number;
      companyName?: string;
      active: boolean;
      description?: string;
      pathPhoto?: string;
      titleLogoPath?: string;
      status: 'logged';
    }
  | { status: 'empty' };

const initialState: UserState = {
  status: 'fetching',
};

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState as UserState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => action.payload,
    logoutUser: (state) => ({ status: 'empty' }),
    updateUser: (state, action: PayloadAction<BackendUserType>) => {
      if (state.status === 'logged' && state.id === action.payload.id) {
        return {
          ...state,
          firstName: action.payload.firstName,
          secondName: action.payload.secondName,
          lastName: action.payload.lastName,
          email: action.payload.email,
          phone: action.payload.phone,
          companyName: action.payload.companyName,
          description: action.payload.description,
          pathPhoto: action.payload.pathPhoto,
          titleLogoPath: action.payload.titleLogoPath,
        };
      }
    },
  },
});

export const { setUser, logoutUser, updateUser } = userSlice.actions;

export const selectUser = (state: RootState): UserState => state.user;

export const registerHandler =
  (formData: UserFormType): AppThunk =>
  (dispatch) => {
    console.log(formData);
    axios
      .post<BackendUserType>('/api/user/', formData)
      .then((res) => dispatch(setUser({ ...res.data, status: 'logged' })))
      .catch(console.log);
  };

export const loginHandler =
  (formData: AuthorizeUserFormType): AppThunk =>
  (dispatch) => {
    axios
      .post<BackendUserType>('/api/user/auth', formData)
      .then((res) => dispatch(setUser({ ...res.data, status: 'logged' })))
      .catch(console.log);
  };

export const checkAuth = (): AppThunk => (dispatch) => {
  axios<BackendUserType>('/api/user/check')
    .then((res) => {
      if (res.status === 200) {
        dispatch(setUser({ ...res.data, status: 'logged' }));
      }
    })
    .catch(() => {
      dispatch(setUser({ status: 'empty' }));
    });
};

export const logoutHandler = (): AppThunk => (dispatch) => {
  axios('/api/user/logout')
    .then(() => dispatch(logoutUser()))
    .catch(console.log);
};

export default userSlice.reducer;
