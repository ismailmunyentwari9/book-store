const ADDBOOK = 'book-store/redux/book/bookSlice/ADDBOOK';
const REMOVEBOOK = 'book-store/redux/book/bookSlice/REMOVEBOOK';

const defultState = [];
export const booReducer = (state = defultState, action) => {
  switch (action.type) {
    case ADDBOOK:
      return [...state, action.payload];
    case REMOVEBOOK:
      return [...state.fiter((item) => item.id !== action.payload)];
    default: return state;
  }
};

export const AddBook = (book) => ({
  type: ADDBOOK,
  payload: book,

});

export const RemoveBook = (id) => ({
  type: ADDBOOK,
  payload: id,

});
