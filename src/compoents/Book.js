import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchBook } from '../redux/books/booksSlice';
import Form from './Form';
import BookCard from './BookCard';

const Book = () => {
  let books = useSelector((state) => state.books).book;
  if (books === null || books === undefined) {
    books = [];
  }

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBook());
  }, []);

  return (
    <>
      <div>
        {books.map((book) => <BookCard key={book.item_id} book={book} />)}
      </div>
      <Form />
    </>
  );
};

export default Book;
