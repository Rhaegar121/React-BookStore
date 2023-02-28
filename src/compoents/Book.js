import { useSelector } from 'react-redux';
import Form from './Form';
import BookCard from './BookCard';

const Book = () => {
  const { books } = useSelector((state) => state.books);
  // console.log(title);
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
