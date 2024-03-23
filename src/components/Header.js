import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../img/header/logo.svg"
const Header = () => {
  return (
    <header className='bg-gray-500 fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <Link>
          <img src={Logo} alt='' />
        </Link>
        <nav className='hidden lg:flex gap-x-12 font-semibold'>
          <Link to={'/'}
            className='text-gray-400 hover:text-gray-700 transition'>
            Home
          </Link>
          <Link to={'/about'}
            className='text-gray-400 hover:text-gray-700 transition'>
            about
          </Link>
          <Link to={'/business'}
            className='text-gray-400 hover:text-gray-700 transition'>
            business
          </Link>
          <Link to={'/contact'}
            className='text-gray-400 hover:text-gray-700 transition'>
            contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
