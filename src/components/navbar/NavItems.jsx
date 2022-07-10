import React from 'react';
import NavItem from './NavItem';

const NavItems = ({ navMode, onclick }) => {
  const navItems = [
    { item: 'Home', link: '' },
    { item: 'About Us', link: 'about' },
    { item: 'Contact', link: 'contact' },
    { item: 'Log In', link: 'login' },
    { item: 'Register', link: 'register' },
  ];
  return (
    // Change view from hidden to flex in line 17
    <ul
      // className={` md:w-[50%] md:z-0 gap-12 py-5 md:p-0 ${
      //   navMode ? "top-100px" : "-top-[100vh]"
      // } hidden  z-40 top-[120px] left-0  transition-all duration-75 bg-light-purple md:bg-opacity-0  w-full flex-col  md:flex-row  md:flex absolute md:relative  md:top-auto justify-end lg:gap-5 xl:gap-8 md:gap-3 items-center`}
      className={`md:w-[50%] md:z-0 gap-12 py-5 md:p-0 ${
        navMode ? 'top-0 h-[100vh] pt-40 ' : '-top-[100vh]'
      }  z-30 left-0  md:h-fit transition-all duration-75 bg-light-purple md:bg-opacity-0 flex w-full flex-col  md:flex-row  md:flex absolute md:relative  md:top-auto md:justify-end lg:gap-5 xl:gap-8 md:gap-0 items-center`}
    >
      {navItems.map((item, index) => (
        <NavItem
          onclick={onclick}
          key={index}
          navItem={item.item}
          navLink={item.link}
        />
      ))}
    </ul>
  );
};
export default NavItems;
