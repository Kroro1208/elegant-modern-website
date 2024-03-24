import React from 'react';
import aboutus from '../img/about/aboutus.jpg'
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className='section'>
      <div className='container mx-auto h-full relative'>
        <div className='bg-gray-100 flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16'>
          <div className='flex max-h-96 lg:max-h-max order-2 lg:order-none overflow-hidden'>
            <img src={aboutus} alt="" />
          </div>
          <div className='pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex flex-col justify-center items-center lg:items-start'>
            <h1 className='h1'>About us</h1>
            <p className='mb-12 max-w-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Optio ipsa accusantium quidem exercitationem voluptatibus, laboriosam aliquid voluptatum nobis. Porro, inventore. Atque officia nulla delectus adipisci deserunt non incidunt et repellendus?</p>
            <br />
            <br />
            <Link to='/business' className='btn rounded-lg'>View our works</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
