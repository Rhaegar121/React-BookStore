import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul className="navLink">
      <li><Link to="/">Books</Link></li>
      <li><Link to="/categories">Categories</Link></li>
    </ul>
  </nav>
);

export default Navbar;