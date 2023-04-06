/* eslint-disable import/extensions */
import './books.css';
import { useSelector } from 'react-redux';
import Book from './book';
import Form from './Addform';

function Books() {
  const bookstore = useSelector((state) => state.book);
  return (
    <div className="container books-holder">
      <Book bookstore={bookstore} />
      <div className="horizontal-divider" />
      <Form />
    </div>
  );
}

export default Books;
