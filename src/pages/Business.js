import React from 'react';
import business1 from '../img/business/business1.jpg'
import business2 from '../img/business/business2.jpg'
import business3 from '../img/business/business3.jpg'
import business4 from '../img/business/business4.jpg'
import business5 from '../img/business/business5.jpg'
import business6 from '../img/business/business6.jpg'
import business7 from '../img/business/business7.jpg'
import { Link } from 'react-router-dom';



const Business = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
          <div className='flex flex-col lg:items-start'>
            <h1 className='h1'>Business</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente recusandae officiis, illo ab aut placeat quod aspernatur maxime in dolor ea dolore architecto? Nesciunt mollitia ullam voluptas sed alias recusandae!</p>
            <Link to={'/contact'} className="btn mt-5 mb-[30px] mx-auto lg:mx-0 rounded-lg">Here me</Link>
          </div>
          <div className="lg:gap-2">
            <div className='grid grid-cols-4 gap-2' >
              <div className=' max-w-[250px] lg:max-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img className='rounded-xl object-cover h-full lg:h-[200px] hover:scale-110 transition-all duration-500' src={business1} alt="" />
              </div>
              <div className=' max-w-[250px] lg:max-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img className='rounded-xl object-cover h-full lg:h-[200px] hover:scale-110 transition-all duration-500' src={business2} alt="" />
              </div>
              <div className=' max-w-[250px] lg:max-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img className='rounded-xl object-cover h-full lg:h-[200px] hover:scale-110 transition-all duration-500' src={business3} alt="" />
              </div>
              <div className=' max-w-[250px] lg:max-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img className='rounded-xl object-cover h-full lg:h-[200px] hover:scale-110 transition-all duration-500' src={business4} alt="" />
              </div>
            </div>
            <div className="grid grid-cols-3 pl-20 mt-2">
              <div className=' max-w-[250px] lg:max-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img className='rounded-xl object-cover h-full lg:h-[200px] hover:scale-110 transition-all duration-500' src={business5} alt="" />
              </div>
              <div className=' max-w-[250px] lg:max-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img className='rounded-xl object-cover h-full lg:h-[200px] hover:scale-110 transition-all duration-500' src={business6} alt="" />
              </div>
              <div className=' max-w-[250px] lg:max-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden'>
                <img className='rounded-xl object-cover h-full lg:h-[200px] hover:scale-110 transition-all duration-500' src={business7} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default Business;
