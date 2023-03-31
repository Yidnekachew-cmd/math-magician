import { Link } from 'react-router-dom';

const NavBar = () => (
  <nav className="navBar">
    <h1>Math Magicians</h1>
    <ul>
      <li>
        <Link className="list-link" to="/">Home</Link>
      </li>
      <li>
        <Link className="list-link" to="/Calculator">Calculator</Link>
      </li>
      <li>
        <Link to="/Quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
