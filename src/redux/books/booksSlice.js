import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const booksSlice = createSlice({
    name: 'book',
    initialState,
    reducers: {
        addBook: (state, action) => [...state, action.payload],
        removeBook: (state, action) => [state.filter((item) => item.id !== action.id)],
      },
  });

export default booksSlice.reducer