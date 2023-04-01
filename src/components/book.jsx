/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import './book.css';
import './progress.css';

function Book({ bookstore }) {
  return (
    <div>
      {bookstore.map((items) => (
        <div key={items.id} className="container book">
          <div className="name-author-complited col-8">
            <div className="name-author">
              <span>Action</span>
              <h2>{items.title}</h2>
              <h6>{items.author}</h6>
              <div className="action-button">
                <button type="button">Comments</button>
                <span className="vertical-divider" />
                <button type="button">Remove</button>
                <span className="vertical-divider" />
                <button type="button">Edit</button>
                <span className="vertical-divider" />
              </div>
            </div>
            <div className="complited-loader">
              <div className="complited-percentage">
                <div className="progress blue">
                  <span className="progress-left">
                    <span className="progress-bar" />
                  </span>
                  <span className="progress-right">
                    <span className="progress-bar" />
                  </span>
                </div>
              </div>
              <div className="progress-value">
                <span> 75%</span>
                <h6>Completed</h6>
              </div>
            </div>
          </div>
          <span className="vertical-divider-right" />
          <div className="col-1">
            <p className="vertical-divider-right" />
          </div>
          <div className="update col-3">
            <span>
              <p>CURRENT CHAPTER</p>
              <p>Chapter 17</p>
              <button type="button" className="btn-btn-primary">UPDATE PROGRESS</button>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
Book.propTypes = {
  bookstore: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default Book;
