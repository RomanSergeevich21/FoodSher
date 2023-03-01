import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AppThunk } from '../hooks';
import type { PartnerRequests, PartnerRequest } from './partnerRequestsType';

const initialState: PartnerRequests = {
  partnerRequests: [],
};

const partnersRequestsSlice = createSlice({
  name: 'requests',
  initialState,
  reducers: {
    setActiveRequests: (state, action: PayloadAction<PartnerRequest[]>) => {
      state.partnerRequests = action.payload;
    },
    setUnactiveRequests: (state, action: PayloadAction<PartnerRequest[]>) => {
      state.partnerRequests = action.payload;
    },
    addPartnerRequest: (state, action: PayloadAction<PartnerRequest>) => {
      state.partnerRequests.unshift(action.payload);
    },
    delPartnerRequest: (state, action: PayloadAction<PartnerRequest['id']>) => {
      state.partnerRequests.filter((request) => request.id !== action.payload);
    },
    updateStatusRequest: (state, action: PayloadAction<PartnerRequest>) => {
      state.partnerRequests.map((request): number => {
        if (request.id === action.payload.id && request.statusid !== action.payload.statusid) {
          request.statusid = action.payload.statusid;
        }
        return request.statusid;
      });
    },
  },
});

export const { setActiveRequests, setUnactiveRequests, delPartnerRequest, updateStatusRequest } =
  partnersRequestsSlice.actions;

export default partnersRequestsSlice.reducer;

export const getActivePartnerRequests = (): AppThunk => (dispatch) => {
  axios<PartnerRequest[]>('/api/requests/actives')
    .then((res) => dispatch(setActiveRequests(res.data)))
    .catch(console.log);
};

export const getUnactivePartnerRequests = (): AppThunk => (dispatch) => {
  axios<PartnerRequest[]>('/api/requests/unactives')
    .then((res) => dispatch(setUnactiveRequests(res.data)))
    .catch(console.log);
};

export const deletePartnerRequest =
  (id: number): AppThunk =>
  (dispatch) => {
    axios
      .delete<PartnerRequest>(`/api/requests/${id}`)
      .then((res) => dispatch(delPartnerRequest(res.data.id)))
      .catch(console.log);
  };

export const updatePartnerStatusRequest =
  (id: number, status: number): AppThunk =>
  (dispatch) => {
    axios
      .put<PartnerRequest>(`/api/requests/${id}`, { statusid: status })
      .then((res) => dispatch(updateStatusRequest(res.data)))
      .catch(console.log);
  };
