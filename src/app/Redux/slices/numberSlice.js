
import { createSlice } from '@reduxjs/toolkit';

const numberSlice = createSlice({
  name: 'number',
  initialState: {
    number: 50,
  },
  reducers: {
    setNumber: (state, action) => {
      return {
        ...state,
        number: action.payload,
      };
    },
  },
});

export const { setNumber } = numberSlice.actions;  // Fix here: use searchSlice instead of apiSlice
export default numberSlice.reducer;


