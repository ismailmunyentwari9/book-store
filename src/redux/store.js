import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { bookSlice } from './book/bookSlice';
import { categorieSlice } from './categories/categoriesSlice';

const rootReducer = combineReducers({ book: bookSlice, status: categorieSlice });
const store = configureStore({ reducers: rootReducer });
export default store;
