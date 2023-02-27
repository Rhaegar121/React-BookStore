import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const categoriesSlice = createSlice({
  name: 'catagories',
  initialState,
  reducers: {
    checkStatus: () => 'Under Construction',
  },
});

export const { checkingStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
