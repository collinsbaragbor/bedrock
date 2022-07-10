import React from 'react';
import { NavLink } from 'react-router-dom';
const NavItem = ({ navLink, navItem, onclick }) => {
  return (
    <NavLink
      onClick={onclick}
      to={navLink}
      className={` ${
        navLink === 'register'
          ? 'rounded-3xl  md:bg-light-purple bg-white px-5 text-black md:text-white hover:bg-deep-purple hover:font-semibold'
          : 'hover:border-b-[3px] rounded-3xl md:text-black text-white md:rounded-none hover:outline-4 hover:outline-light-purple hover:text-deep-purple lg:hover:text-xl xl:hover:text-2xl'
      } transition-all  md:shadow-none md:w-fit shadow-light-black shadow-lg w-1/2 text-center whitespace-nowrap duration-75 navitem p-2`}
    >
      {navItem}
    </NavLink>
  );
};

export default NavItem;
