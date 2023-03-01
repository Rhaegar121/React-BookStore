import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';

const Form = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [bookCategory, setBookCategory] = useState('');

  const dispatch = useDispatch();

  const handleInputTitle = (e) => {
    setBookTitle(e.target.value);
  };

  const handleInputAuthor = (e) => {
    setBookAuthor(e.target.value);
  };

  const handleInputCategory = (e) => {
    setBookCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      item_id: uuidv4(),
      title: bookTitle,
      author: bookAuthor,
      category: bookCategory,
    };
    dispatch(addBook(newBook));
    setBookTitle('');
    setBookAuthor('');
    setBookCategory('');
  };

  return (
    <div>
      <h1>Add new book</h1>
      <form>
        <input type="text" placeholder="Title" onChange={handleInputTitle} value={bookTitle} required />
        <input type="text" placeholder="Author" onChange={handleInputAuthor} value={bookAuthor} required />
        <input type="text" placeholder="Category" onChange={handleInputCategory} value={bookCategory} required />
        <button type="submit" onClick={handleSubmit}>Add</button>
      </form>
    </div>
  );
};

export default Form;
