import PropTypes from 'prop-types'; // eslint-disable-line import/no-extraneous-dependencies
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

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
