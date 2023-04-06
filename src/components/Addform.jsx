import { useState } from 'react';
import './form.css';
import { useDispatch } from 'react-redux';
import { AddBook } from '../redux/book/booksSlice';

const Form = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleForm = () => {
    if (title && author) {
      dispatch(AddBook({ title, author }));
      setTitle('');
      setAuthor('');
    }
  };

  return (

    <div className="form-inputs">
      <div className="form-group">
        <input
          type="text"
          required
          className="form-control"
          placeholder="Book Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          required
          className="form-control"
          placeholder="Book Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <button type="button" onClick={handleForm}>
          ADD BOOK
        </button>
      </div>
    </div>
  );
};

export default Form;
