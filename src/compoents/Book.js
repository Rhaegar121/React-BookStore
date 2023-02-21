/* eslint-disable react/prop-types */
import Form from './Form';

const Book = ({ title, author }) => (
  <>
    <div>
      <p>{title}</p>
      <p>{author}</p>
      <button type="button">Remove</button>
    </div>
    <Form />
  </>
);

export default Book;
