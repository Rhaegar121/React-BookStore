import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => [...state, action.payload],
    removeBook: (state, action) => [state.filter((item) => item.id !== action.id)],
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
