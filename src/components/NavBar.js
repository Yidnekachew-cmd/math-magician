import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../index.css';
import logoImg from '../assets/math-logo.png';

const NavBar = () => {
  const location = useLocation();
  const [showMenu, setShowMenu] = useState(false);
  const handleMenuClick = () => {
    setShowMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };
  return (
    <nav className="flex justify-between items-center w-[89%] md:w-[95%] text-lg py-4 mx-auto">
      <div className="flex items-center space-x-2">
        <img className="w-8 h-8 md:w-10 z-10 rounded-full md:h-10" src={logoImg} alt="logo" />
        {/* <Link to="/" onClick={closeMenu}> */}
        <h2 className="font-bold z-10 text-lg md:text-2xl w-[40%]">
          Maths
        </h2>
        {/* </Link> */}
      </div>
      <div className="md:hidden">
        <button
          onClick={handleMenuClick}
          type="button"
          className="text-black focus:outline-none "
        >
          {showMenu ? (
            <FaTimes
              size={30}
              className="z-20 fixed top-[3%] left-[87%]"
            />
          ) : (
            <FaBars size={30} className="z-20 fixed top-[3%] left-[87%]" />
          )}
        </button>
      </div>
      <ul className={`${showMenu
        ? 'flex flex-col  font-nokia-bold h-screen bg-[#29A8FF] items-center justify-center space-y-8 overflow-auto bg-opacity-80 font-bold text-3xl w-full z-10 top-0 left-0 transform -translate-x-100 transition-transform ease-in-out duration-200  md:flex fixed'
        : 'hidden z-10 text-lg md:flex md:space-x-3 justify-center items-center'
      }`}
      >
        <li>
          <Link className={`hover:text-white ${location.pathname === '/' ? 'border-b-4 border-white' : ''}`} to="/" onClick={closeMenu}>Home</Link>
        </li>
        <li>
          <Link className={`hover:text-white ${location.pathname === '/Calculator' ? 'border-b-4 border-white' : ''}`} to="/Calculator" onClick={closeMenu}>Calculator</Link>
        </li>
        <li>
          <Link className={`hover:text-white ${location.pathname === '/Quote' ? 'border-b-4 border-white' : ''}`} to="/Quote" onClick={closeMenu}>Quotes</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
