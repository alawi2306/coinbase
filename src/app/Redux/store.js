// store/index.js

import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './slices/apiSlice';
import searchReducer from "./slices/searchSlice"
import numberReducer from "./slices/numberSlice"

const store = configureStore({
  reducer: {
    api: apiReducer,
    searchState: searchReducer,
    number: numberReducer
  },
  
});

export default store;