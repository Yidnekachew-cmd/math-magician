import { Link } from 'react-router-dom';
import '../index.css';
import logoImg from '../assets/math-logo.png';

const NavBar = () => (
  <nav className="flex justify-between items-center w-[89%] md:w-[95%] text-xl py-6 mx-auto">
    <div className="flex items-center space-x-2">
      <img className="w-8 h-8 md:w-10 z-10 rounded-full md:h-10" src={logoImg} alt="logo" />
      <h2 className="font-bold z-10 text-lg md:text-2xl w-[40%]">
        Maths
      </h2>
    </div>
    <ul className="hidden  md:space-x-3 md:flex z-10 ">
      <li>
        <Link className="hover:text-[#005DB2]" to="/">Home</Link>
      </li>
      <li>
        <Link className="hover:text-[#005DB2]" to="/Calculator">Calculator</Link>
      </li>
      <li>
        <Link className="hover:text-[#005DB2]" to="/Quote">Quotes</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
