import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/vGqwwjT4O4Gm9D3HZMDv/books';

export const fetchBook = createAsyncThunk('fetchBook', async () => {
  const booksResult = await fetch(url);
  const bookData = await booksResult.json();
  const Book = [];
  Object.keys(bookData).forEach((key) => {
    Book.push({
      item_id: key,
      title: bookData[key][0].title,
      author: bookData[key][0].author,
      category: bookData[key][0].category,
    });
  });
  return Book;
});

export const addBook = createAsyncThunk('addBook', async (book) => {
  await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: uuidv4(),
      title: book.title,
      author: book.author,
      category: book.category,
    }),
  });
  return book;
});

export const removeBook = createAsyncThunk('removeBook', async (id) => {
  await fetch(`${url}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return id;
});

const booksSlice = createSlice({
  name: 'book',
  initialState: [],
  extraReducers: (builder) => {
    builder
      .addCase(fetchBook.fulfilled, (state, action) => ({
        ...state,
        book: [...action.payload],
      }))
      .addCase(addBook.fulfilled, (state, action) => {
        state.book.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => ({
        ...state,
        book:
        state.book.filter((book) => book.item_id !== action.payload),
      }));
  },
});

export default booksSlice.reducer;
