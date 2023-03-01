import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { BackendUserType } from '../userSlice/userType';
import type { AppThunk } from '../hooks';

const initialState: BackendUserType = {
  id: 0,
  firstName: '',
  lastName: '',
  secondName: '',
  email: '',
  phone: '',
  active: false,
  pathPhoto: '',
  roleid: 0,
  companyName: '',
  description: '',
  titleLogoPath: '',
};

const onePartnerSlice = createSlice({
  name: 'partner',
  initialState,
  reducers: {
    setOnePartner: (state, action: PayloadAction<BackendUserType>) => action.payload,
  },
});

export const { setOnePartner } = onePartnerSlice.actions;
export default onePartnerSlice.reducer;

export const loadOnePartner =
  (id: number): AppThunk =>
  (dispatch) => {
    axios<BackendUserType>(`/partners/${id}`)
      .then((res) => dispatch(setOnePartner(res.data)))
      .catch(console.log);
  };
