import PropTypes from 'prop-types';
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

Form.propTypes = {
  handleForm: PropTypes.func.isRequired,
  setAuthor: PropTypes.func.isRequired,
  setTitle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Form;
