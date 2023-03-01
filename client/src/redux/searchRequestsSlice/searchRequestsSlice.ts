import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import type { AppThunk } from '../hooks';
import type { BackendRequest, BackendRequestSlice } from './searchRequestsType';
// import type Post from './PostType';

const initialState: BackendRequestSlice = {
  requests: [],
  searchRequests: [],
};

export const searchRequestsSlice = createSlice({
  name: 'searchRequests',
  initialState,
  reducers: {
    setRequests: (state, action: PayloadAction<BackendRequest[]>) => {
      state.searchRequests = action.payload;
    },

    setSearchRequests: (state, action: PayloadAction<BackendRequest[]>) => {
      state.searchRequests = action.payload;
    },
  },
});

export const { setRequests, setSearchRequests } = searchRequestsSlice.actions;

export const getRequestsApi = (): AppThunk => (dispatch) => {
  axios<BackendRequest[]>('/api/searchRequests')
    .then((res) => dispatch(setRequests(res.data)))
    .catch(console.log);
};

// export const loadSearchPosts =
//   (input: string): AppThunk =>
//   (dispatch) => {
//     axios
//       .post<BackendRequest[]>(`/api/posts/search`, { input })
//       .then((res) => dispatch(setSearchRequests(res.data)))
//       .catch(console.log);
//   };

// export const addPost =
//   (formInput: FormPost): AppThunk =>
//   (dispatch) => {
//     axios
//       .post<Post>('/api/posts/', formInput)
//       .then((res) => dispatch(add(res.data)))
//       .catch(console.log);
//   };

// export const deletePost =
//   (id: number): AppThunk =>
//   (dispatch) => {
//     axios
//       .delete(`/api/posts/${id}`)
//       .then(() => dispatch(del(id)))
//       .catch(console.log);
//   };

export default searchRequestsSlice.reducer;
