import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/book/booksSlice';
import './form.css';

function AddForm() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const [category, setCategory] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title && author && category) {
      dispatch(addBook({
        item_id: uuidv4(), title, author, category,
      }));
      setTitle('');
      setAuthor('');
    }
  };

  return (
    <div className="form-holder">
      <h2 className="form-heading">ADD NEW BOOK</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Book title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Book author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <div className="form-group">
          <select
            className="form-control"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
          >
            <option value="action">Action</option>
            <option value="science-fiction">Science Fiction</option>
            <option value="economy">Economy</option>
          </select>
        </div>

        <button type="submit">
          ADD BOOK
        </button>
      </form>
    </div>
  );
}

export default AddForm;
