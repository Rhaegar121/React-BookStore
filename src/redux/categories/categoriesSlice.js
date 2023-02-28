const CHECK_STATUS = 'CHECK_STATUS';

const initialState = [];

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under Construction';
    default:
      return state;
  }
};

// Action Creators
const checkStatus = () => ({
  type: CHECK_STATUS,
});

// Exports
export { checkStatus };
export default categoriesReducer;
