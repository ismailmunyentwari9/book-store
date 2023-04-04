import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { booReducer } from './book/bookSlice';
import { categoryReducer } from './categories/categoriesSlice';

const rootReducer = combineReducers({ book: booReducer, status: categoryReducer });
const store = configureStore({ reducers: rootReducer });
export default store;
