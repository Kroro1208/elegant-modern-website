import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";


const Socials = () => {
  return (
    <div className='hidden xl:flex ml-24'>
      <ul className='flex gap-5'>
        <li>
          <a href="http://www.facebook.com" target='_blank'><FaFacebook size={24} /></a>
        </li>
        <li>
          <a href="http://www.youtube.com" target='_blank'><IoLogoYoutube size={24} /></a>
        </li>
        <li>
          <a href="http://www.instagram.com" target='_blank'><FaInstagram size={24} /></a>
        </li>
      </ul>
    </div>
  );
};

export default Socials;
