import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import type { BackendUserType, PartnersSliceState } from '../userSlice/userType';
import type { AppThunk } from '../hooks';

const initialState: PartnersSliceState = {
  partners: [],
};

const partnersSlice = createSlice({
  name: 'partners',
  initialState,
  reducers: {
    setPartners: (state, action: PayloadAction<BackendUserType[]>) => {
      state.partners = action.payload;
    },
  },
});

export const { setPartners } = partnersSlice.actions;
export default partnersSlice.reducer;

export const loadPartners = (): AppThunk => (dispatch) => {
  axios<BackendUserType[]>('/partners')
    .then((res) => dispatch(setPartners(res.data)))
    .catch(console.log);
};
