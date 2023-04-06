import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './book/booksSlice';
import { categorieSlice } from './categories/categoriesSlice';

const store = configureStore({ reducer: { book: bookReducer, status: categorieSlice } });
export default store;
