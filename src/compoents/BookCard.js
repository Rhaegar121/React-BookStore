const BookCard = ({ book }) => (
  <div>
    <span>
      Title:
      <span>{book.title}</span>
    </span>
    <span>
      Author:
      <span>{book.author}</span>
    </span>
    <button type="button">remove</button>
  </div>
);

export default BookCard;
