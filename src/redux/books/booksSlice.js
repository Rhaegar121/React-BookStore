import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const url = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/Z5WyGB77q5Knh8vVdrbr/books';

// const initialState = {
//   book: [],
// };

export const fetchBook = createAsyncThunk('fetchBook', async () => {
  const res = await fetch(url);
  const data = await res.json();
  const bookList = Object.keys(data).map((key) => (
    {
      item_id: key,
      title: data[key][0].title,
      author: data[key][0].author,
      category: data[key][0].category,
    }
  ));
  // console.log(bookList);
  return bookList;
  // const bookList = [];
  // Object.keys(data).forEach((key) => {
  //   bookList.push({
  //     item_id: key,
  //     title: data[key][0].title,
  //     author: data[key][0].author,
  //     category: data[key][0].category,
  //   });
  // });
  // return bookList;
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
      // .addCase(fetchBook.fulfilled, (state, action) => ({
      //   ...state,
      //   book: [...action.payload],
      // }))
      // .addCase(addBook.fulfilled, (state, action) => {
      //   state.book.push(action.payload);
      // })
      // .addCase(removeBook.fulfilled, (state, action) => ({
      //   ...state,
      //   book: state.book.filter((book) => book.item_id !== action.payload),
      // }));
      .addCase(fetchBook.fulfilled, (state, action) => action.payload)
      .addCase(addBook.fulfilled, (state, action) => {
        state.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => (
        [...state.filter((book) => book.item_id !== action.payload)]));
  },
});

export default booksSlice.reducer;
