// store/slices/apiSlice.js

import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'api',
  initialState: {
    apiData1: null,
    apiData2: [],
    apiData3: []
    // ... add more as needed
  },
  reducers: {
    setData1: (state, action) => {
      return {
        ...state,
        apiData1: action.payload,
      };
    },
    setData2: (state, action) => {
      return {
        ...state,
        apiData2: action.payload,
      };
    },
    setData3: (state, action) => {
      return {
        ...state,
        apiData3: action.payload,
      };
    },
    // ... add more as needed
  },
});

export const { setData1, setData2, setData3 } = apiSlice.actions;
export default apiSlice.reducer;

