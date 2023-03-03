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
          <p>Completed</p>
        </div>
      </div>
      <div className="chapter">
        <p className="current-chapter">Current Chapter</p>
        <p className="chapter-title">Chapter 17</p>
        <button type="button" className="update-btn">Update Progress</button>
      </div>
    </div>
  );
};

export default BookCard;
