

import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    login: null,
  },
  reducers: {
    setLogin: (state, action) => {
      return {
        ...state,
        login: action.payload,
      };
    },
  },
});

export const { setLogin } = loginSlice.actions;  
export default loginSlice.reducer;


