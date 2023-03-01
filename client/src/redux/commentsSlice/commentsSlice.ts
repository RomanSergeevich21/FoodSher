import type { PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';
import type { AppThunk } from '../hooks';
import type { CommentFormType, CommentSliceType, CommentType } from './commentsSliceType';

const initialState: CommentSliceType = {
  comments: [],
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setComments: (state, action: PayloadAction<CommentType[]>) => {
        state.comments = action.payload
    },
    addComment: (state, action: PayloadAction<CommentType>) => {
        state.comments.unshift(action.payload)
    }
  },
});

export const { setComments, addComment } = commentsSlice.actions;

export const setAllComments =
  (id: string): AppThunk =>
  (dispatch) => {
    axios<CommentType[]>(`/api/comments/${id}`)
      .then((res) => dispatch(setComments(res.data)))
      .catch(console.log);
  };

export const addOneComment =
  (id: string, inputData: CommentFormType): AppThunk =>
  (dispatch) => {
    axios
      .post<CommentType>(`/api/comments/${id}`, inputData)
      .then((res) => dispatch(addComment(res.data)))
      .catch(console.log);
  };

export default commentsSlice.reducer;
