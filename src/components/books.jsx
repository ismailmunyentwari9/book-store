import React, { useState } from 'react';
import './books.css';
import Book from './book';
import Form from './Addform';

function Books() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [bookstore, setBookstore] = useState([]);

  const handleForm = () => {
    const newBook = { title, author };
    setBookstore([...bookstore, newBook]);
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="container books-holder">
      <Book bookstore={bookstore} />
      <div className="horizontal-divider" />
      <Form
        handleForm={handleForm}
        setAuthor={setAuthor}
        setTitle={setTitle}
        title={title}
        author={author}
      />
    </div>
  );
}

export default Books;
