import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { booksSlice } from './book/booksSlice';
import { categorieSlice } from './categories/categoriesSlice';

const rootReducer = combineReducers({ book: booksSlice, status: categorieSlice });
const store = configureStore({ reducers: rootReducer });
export default store;
