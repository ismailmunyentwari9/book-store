/* eslint-disable no-param-reassign */
// './src/redux/book/bookSlice.js';
import { createSlice } from '@reduxjs/toolkit';

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    books: [{
      id: 1,
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 2,
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 3,
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    }],
  },
  reducers: {
    AddBook: (state, action) => {
      state.books = [
        ...state.books, {
          id: state.books.length + 1,
          title: action.payload.title,
          author: action.payload.author,
        },
      ];
    },

    RemoveBook: (state, action) => {
      state.books = state.books.filter((items) => items.id !== action.payload.id);
    },
  },

});
export const { AddBook, RemoveBook } = booksSlice.actions;
const bookReducer = booksSlice.reducer;
export default bookReducer;
