import { Link } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Navbar = () => (
  <nav className="navbar">
    <div className="navLink">
      <h1>Bookstore CMS</h1>
      <span><Link to="/">Books</Link></span>
      <span><Link to="/categories">Categories</Link></span>
    </div>
    <div className="user"><ImUser /></div>
  </nav>
);

export default Navbar;
