/* eslint-disable react/prop-types */
import './form.css';

const Form = ({
  handleForm, setAuthor, setTitle, title, author,
}) => (
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

export default Form;
