import './nav.css';
import { Link } from 'react-router-dom';

const Nav = () => (
  <>
    <div className="container links-holder">
      <div className="links">
        <span className="nav-brand">Bookstore CMS</span>
        <ul>
          <li><Link to="/">Books</Link></li>
          <li><Link to="/Categories">CATEGORIES</Link></li>
        </ul>
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

  </>
);
export default Nav;
