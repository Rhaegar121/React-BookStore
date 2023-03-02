import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  return (
    <div className="book-card">
      <div className="book-detail">
        <p className="category">{book.category}</p>
        <p className="title">{book.title}</p>
        <p className="author">{book.author}</p>
        <div className="book-btn">
          <button type="button">Comments</button>
          <button type="button" onClick={() => { dispatch(removeBook(book.item_id)); }}>Remove</button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="progress">
        <div className="progress-bar" />
        <div className="progress-text">
          <p>64%</p>
          <p>completed</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
