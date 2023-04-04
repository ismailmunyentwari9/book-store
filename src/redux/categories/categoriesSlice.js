const STATUS = 'book-store/redux/book/bookSlice/STATUS';

const defultState = '';
export const categoryReducer = (state = defultState, action) => {
  switch (action.type) {
    case STATUS:
      return 'UNDER  CONSTRUCTION';
    default:
      return state;
  }
};

export const Status = () => ({
  type: STATUS,
});
