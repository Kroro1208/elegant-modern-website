import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "../img/header/logo.svg";
import Socials from './Socials'
import MobileNav from './MobileNav'

const Footer = () => {
  return (
    <div className='bg-gray-500 w-full px-[30px] lg:px-[100px] h-[100px] lg:h-[140px] flex items-center'>
      <div className='flex flex-col lg:flex-row lg:items-center w-full justify-between'>
        <nav className='hidden xl:flex gap-x-12 font-semibold'>
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
      <Socials />
      <MobileNav />
    </div>
  );
};

export default Footer;
