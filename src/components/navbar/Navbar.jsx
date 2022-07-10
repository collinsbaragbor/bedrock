import React, { useState } from 'react';
import NavItems from './NavItems';
import './Navbar.css';
import { useScrollPosition } from './useScrollPosition';
import logo from '../../assets/bedrock-logo-2.png';

const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
};

const Navbar = () => {
  const [navMode, setNavMode] = useState(false);
  const handleNaveModeToggle = () => {
    setNavMode(!navMode);
  };
  const scrollPosition = useScrollPosition();
  return (
    <div
      className={classNames(
        scrollPosition > 0
          ? 'shadow-2xl bg-white'
          : 'bg-[#672768] md:bg-white shadow-none',
        'nav-bar flex justify-center items-center sticky  md:bg-[#fff] top-0 h-[10vh] xl:h-[12vh] w-[100%] px-[5%] lg:px-[10%]  text-base md:text-base lg:text-lg xl:text-xl transition-shadow'
      )}
    >
      <nav className="w-full md:relative flex justify-between items-center ">
        <img
          src={logo}
          alt="Logo"
          className="w-[40%] z-50 md:w-[15%] lg-[20%]"
        />

        {/* Hamburger menu */}
        <div
          className={`z-50 flex w-10 h-10 m-2 md:hidden relative items-center justify-between flex-col `}
          onClick={handleNaveModeToggle}
        >
          <span
            className={`w-full h-1 transition-all duration-75 transform ${
              navMode ? '-rotate-45 mt-3 ml-2 bg-white' : 'bg-light-purple'
            } `}
          ></span>
          <span
            className={`w-full h-1 transition-all duration-75 transform ${
              navMode ? 'hidden' : 'flex'
            } bg-light-purple`}
          ></span>
          <span
            className={`w-full h-1 transition-all duration-75 transform ${
              navMode ? 'rotate-45 mb-6 ml-2 bg-white' : 'bg-light-purple'
            } `}
          ></span>
        </div>
        <NavItems navMode={navMode} onclick={handleNaveModeToggle} />
      </nav>
    </div>
  );
};

export default Navbar;
