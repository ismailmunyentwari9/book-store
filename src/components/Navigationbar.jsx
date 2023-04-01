/* eslint-disable react/void-dom-elements-no-children */
import './nav.css';
import { Route, Routes, Link } from 'react-router-dom';
import Books from './books';
import Categories from './categories';

const Nav = () => (
  <>
    <div className="container links-holder">
      <div className="links">
        <span className="nav-brand">Bookstore CMS</span>
        <li><Link to="/">Books</Link></li>
        <li><Link to="/categories">CATEGORIES</Link></li>
      </div>

      <div
        className="user-profile"
      >
        <span
          className="fa fa-user"
          style={{
            color: 'blue',
          }}
        />
      </div>
    </div>
    <Routes>
      <Route path="/" components={<Books />} />
      <Route path="/categories" components={<Categories />} />
    </Routes>

  </>
);
export default Nav;
