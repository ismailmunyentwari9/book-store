import React, { useEffect } from 'react';
import './books.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, addBook, removeBook } from '../redux/book/booksSlice';
import Book from './book';
import Form from './Addform';

function Books() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);
  const books = useSelector((state) => state.book);
  const handleAddBook = (book) => {
    dispatch(addBook(book));
  };

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div className="container books-holder">
      <Book books={books.books} handleRemoveBook={handleRemoveBook} />
      <div className="horizontal-divider" />
      <Form handleAddBook={handleAddBook} />
    </div>
  );
}

export default Books;
