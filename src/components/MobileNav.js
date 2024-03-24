import React, { useState } from 'react';
import { RiMenu3Line } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link, useNavigate } from 'react-router-dom';
import { IoCloseOutline } from "react-icons/io5";

const menuMotion = {
  hidden: {
    x: '100%'
  },
  show: {
    x: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.9]
    }
  }
};

const MobileNav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  function handleClick() {
    setOpenMenu(false);
  }


  return (
    <nav className='text-primary xl:hidden'>
      <div onClick={() => setOpenMenu(true)} className='text-3xl cursor-pointer'>
        <RiMenu3Line />
      </div>
      <motion.div
        variants={menuMotion}
        initial='hidden'
        animate={openMenu ? 'show' : ''}
        className='bg-gray-400 shadow-2xl w-full absolute top-0 right-0 max-w-xs h-screen z-20'>
        <div
          onClick={handleClick}
          className='text-4xl absolute z-30 p-3 cursor-pointer'>
          <IoCloseOutline />
        </div>
        <ul className='h-full flex flex-col justify-center items-center gap-y-8 text-primary font-primary font-semibold text-3xl'>
          <li>
            <Link to="/" onClick={handleClick}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={handleClick}>About</Link>
          </li>
          <li>
            <Link to="/business" onClick={handleClick}>Business</Link>
          </li>
          <li>
            <Link to="/contact" onClick={handleClick}>Contact</Link>
          </li>
        </ul>
      </motion.div>
    </nav>

  );
};

export default MobileNav;
