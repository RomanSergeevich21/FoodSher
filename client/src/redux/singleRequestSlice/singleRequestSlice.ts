import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AppThunk } from '../hooks';
import type { RootState } from '../store';
import type { BackendRequestWithUserType } from './singleRequestsType';

const initialState: BackendRequestWithUserType = {
  title: '',
  lifeTimeStart: null,
  lifeTimeEnd: null,
  address: '',
  contactPhone: 0,
  contactName: '',
  description: '',
  id: 0,
  partnerid: 0,
  statusid: 0,
  User: {
    id: 0,
    firstName: '',
    lastName: '',
    secondName: '',
    email: '',
    phone: '',
    roleid: 0,
    companyName: '',
    active: true,
    description: '',
  },
  Products: [],
};

export const requestSlice = createSlice({
  name: 'request',
  initialState,
  reducers: {
    setRequest: (state, action: PayloadAction<BackendRequestWithUserType>) => action.payload,
  },
});

export const { setRequest } = requestSlice.actions;

export const getSingleRequest =
  (id: string): AppThunk =>
  (dispatch) => {
    // console.log('---------->', id);
    axios<BackendRequestWithUserType>(`/api/post/${id}`)
      .then((res) => dispatch(setRequest(res.data)))
      .catch(console.log);
  };

export default requestSlice.reducer;
