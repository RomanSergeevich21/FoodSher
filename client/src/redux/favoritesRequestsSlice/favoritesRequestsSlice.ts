import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AppThunk } from '../hooks';
import type {
  FavoriteRequest,
  FavoriteRequestSlice,
  UserFavoriteRequest,
} from './favoritesRequestsType';

const initialState: FavoriteRequestSlice = {
  favorites: {
    id: 0,
    Requests: [],
  },
};

export const favoritesRequestsSlice = createSlice({
  name: 'userFavoriteRequests',
  initialState,
  reducers: {
    setFavorites: (state, action: PayloadAction<UserFavoriteRequest>) => {
      state.favorites.Requests = action.payload.Requests;
    },
    delFavorite: (state, action: PayloadAction<FavoriteRequest['id']>) => {
      state.favorites.Requests = state.favorites.Requests.filter(
        (favRequest) => favRequest.id !== action.payload,
      );
    },
    addFavorite: (state, action: PayloadAction<FavoriteRequest>) => {
      if (
        !state.favorites.Requests.map((favRequest) => favRequest.id).includes(action.payload.id)
      ) {
        state.favorites.Requests.unshift(action.payload);
      }
    },
  },
});

export const { setFavorites, delFavorite, addFavorite } = favoritesRequestsSlice.actions;

export const getFavoritesRequestsApi = (): AppThunk => (dispatch) => {
  axios<UserFavoriteRequest>('/api/favorites')
    .then((res) => dispatch(setFavorites(res.data)))
    .catch(console.log);
};

export const delFavoriteRequest =
  (id: FavoriteRequest['id']): AppThunk =>
  (dispatch) => {
    axios
      .delete(`/api/favorites/${id}`)
      .then((res) => dispatch(delFavorite(id)))
      .catch(console.log);
  };

export const addFavoriteRequest =
  (request: FavoriteRequest): AppThunk =>
  (dispatch) => {
    axios
      .post(`/api/favorites/${request.id}`, request.id)
      .then((res) => dispatch(addFavorite(request)))
      .catch(console.log);
  };


// res.status === 200 &&
export default favoritesRequestsSlice.reducer;
