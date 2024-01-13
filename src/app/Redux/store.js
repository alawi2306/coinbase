// store/index.js

import { configureStore } from '@reduxjs/toolkit';
import apiReducer from './slices/apiSlice';
import searchReducer from "./slices/searchSlice"
import numberReducer from "./slices/numberSlice"
import loginReducer from './slices/loginSlice';
import loggedInReducer from "./slices/loggedInSlice"

const store = configureStore({
  reducer: {
    api: apiReducer,
    searchState: searchReducer,
    number: numberReducer,
    login: loginReducer,
    loggedIn: loggedInReducer
  
  },
  
});

export default store;