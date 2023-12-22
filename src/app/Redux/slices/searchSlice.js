
import { createSlice } from '@reduxjs/toolkit';

const searchSlice = createSlice({
  name: 'searchQuery',
  initialState: {
    searchQuery: null,
  },
  reducers: {
    setSearchQuery: (state, action) => {
      return {
        ...state,
        searchQuery: action.payload,
      };
    },
  },
});

export const { setSearchQuery } = searchSlice.actions;  // Fix here: use searchSlice instead of apiSlice
export default searchSlice.reducer;


