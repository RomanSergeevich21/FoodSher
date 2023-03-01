import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AppThunk } from '../hooks';
import type { RootState } from '../store';
import type { RequestFormType, BackendRequestType } from './requestType';

const initialState: RequestFormType = {
  title: '',
  lifeTimeStart: null,
  lifeTimeEnd: null,
  adress: '',
  contactPhone: null,
  contactName: '',
  description: '',
};
