import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookCard = ({ book }) => {
  // console.log(book);
  const dispatch = useDispatch();
  return (
    <div>
      <span>
        Title:
        <span>{book.title}</span>
      </span>
      <span>
        Author:
        <span>{book.author}</span>
      </span>
      <span>
        Category:
        <span>{book.category}</span>
      </span>
      <button type="button" onClick={() => { dispatch(removeBook(book.item_id)); }}>remove</button>
    </div>
  );
};

export default BookCard;
