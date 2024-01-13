

import { createSlice } from '@reduxjs/toolkit';

const loggedInSlice = createSlice({
  name: 'loggedIn',
  initialState: {
    loggedIn: false,
  },
  reducers: {
    setLoggedIn: (state, action) => {
      return {
        ...state,
        loggedIn: action.payload,
      };
    },
  },
});

export const { setLoggedIn } = loggedInSlice.actions;  
export default loggedInSlice.reducer;

