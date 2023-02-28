import { v4 as uuidv4 } from 'uuid';

const ADD_BOOK = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return [...state.filter((book) => book.item_id !== action.payload.item_id)];
    default:
      return state;
  }
};

const addBook = (book) => ({
  type: ADD_BOOK,
  payload: {
    item_id: uuidv4(),
    title: book.title,
    author: book.author,
    category: book.category,
  },
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  payload: {
    item_id: id,
  },
});

export { addBook, removeBook };
export default booksReducer;
