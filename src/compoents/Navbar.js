import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <div className="navLink">
      <h1>Bookstore CMS</h1>
      <span><Link to="/">Books</Link></span>
      <span><Link to="/categories">Categories</Link></span>
    </div>
    <div className="user">user</div>
  </nav>
);

export default Navbar;
