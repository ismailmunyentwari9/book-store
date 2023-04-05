/* eslint-disable no-param-reassign */
// 'redux/book/categories/categorieSlice';
import { createSlice } from '@reduxjs/toolkit';

export const categorieSlice = createSlice({
  name: 'checkStatus',
  initialState: {
    status: [],
  },
  reducers: {
    checkStatus: (state, action) => {
      state.status = action.payload === 'UNDER CONSTRUCION' ? 'UNDER CONSTRUCION' : state.status;
    },
  },
});
export const { checkStatus } = categorieSlice.actions;
export default categorieSlice.reducer;
