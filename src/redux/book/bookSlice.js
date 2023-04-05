/* eslint-disable no-param-reassign */
// './src/redux/book/bookSlice.js';
import { createSlice } from '@reduxjs/toolkit';

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    books: [],
  },
  reducers: {
    AddBook: (state, action) => {
      state.books = [
        state.books, {
          id: Math.floor(Math.random() * 100),
          author: action.payload.author,
          title: action.payload.author,
        },
      ];
    },

    RemoveBook: (state, action) => {
      state.books = state.books.filter((items) => items.books !== action.payload.id);
    },
  },

});
export const { AddBook, RemoveBook } = bookSlice.actions;
export default bookSlice.reducer;
