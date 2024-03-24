import React from 'react';
import business1 from '../img/business/business1.jpg'
import business2 from '../img/business/business2.jpg'
import business3 from '../img/business/business3.jpg'
import business4 from '../img/business/business4.jpg'
import business5 from '../img/business/business5.jpg'
import business6 from '../img/business/business6.jpg'
import business7 from '../img/business/business7.jpg'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'
import { transition1 } from "../transitions"



const Business = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: '100%' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '100%' }}
      transition={transition1}
      className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          <motion.div
            initial={{ opacity: 0, y: '-80%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-80%' }}
            transition={transition1}
            className='flex flex-col lg:items-start mb-10'>
            <h1 className='h1'>Business</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente recusandae officiis, illo ab aut placeat quod aspernatur maxime in dolor ea dolore architecto? Nesciunt mollitia ullam voluptas sed alias recusandae!</p>
          </motion.div>
          <div className=''>
            <div className='flex flex-col mb-10 items-center md:grid md:grid-cols-2 md:justify-items-center lg:flex lg:flex-row lg:justify-between gap-10 w-full' >
              <div className='max-w-[250px] h-[187px]'>
                <img className='rounded-xl  h-full lg:h-[200px] hover:scale-110 transition-all duration-500' src={business1} alt="" />
              </div>
              <div className=' max-w-[250px] h-[187px]  '>
                <img className='rounded-xl  h-full lg:h-[200px] hover:scale-110 transition-all duration-500' src={business2} alt="" />
              </div>
              <div className=' max-w-[250px] h-[187px]  '>
                <img className='rounded-xl  h-full lg:h-[200px] hover:scale-110 transition-all duration-500' src={business3} alt="" />
              </div>
              <div className=' max-w-[250px] h-[187px]  '>
                <img className='rounded-xl  h-full lg:h-[200px] hover:scale-110 transition-all duration-500' src={business4} alt="" />
              </div>
            </div>
            <div className='flex flex-col items-center md:grid md:grid-cols-2 md:justify-items-center lg:flex lg:flex-row lg:justify-between gap-10 w-full' >
              <div className='max-w-[250px] h-[187px]'>
                <img className='rounded-xl  h-full lg:h-[200px] hover:scale-110 transition-all duration-500' src={business1} alt="" />
              </div>
              <div className=' max-w-[250px] h-[187px]  '>
                <img className='rounded-xl  h-full lg:h-[200px] hover:scale-110 transition-all duration-500' src={business2} alt="" />
              </div>
              <div className=' max-w-[250px] h-[187px]  '>
                <img className='rounded-xl  h-full lg:h-[200px] hover:scale-110 transition-all duration-500' src={business3} alt="" />
              </div>
              <div className=' max-w-[250px] h-[187px]  '>
                <img className='rounded-xl  h-full lg:h-[200px] hover:scale-110 transition-all duration-500' src={business4} alt="" />
              </div>
            </div>
          </div>
          <div className='pb-10'>
            <Link to={'/contact'} className="btn mt-10 mx-auto lg:mx-0 rounded-lg hover:bg-slate-600">お仕事依頼はこちらへ</Link>
          </div>
        </div>

      </div>
    </motion.section >
  );
};

export default Business;
