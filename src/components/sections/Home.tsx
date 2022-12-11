import React from 'react';
import { Link } from 'react-scroll';

export default function Home() {
  return (
    <div className='container mx-auto lg:px-10 flex flex-col min-h-screen pt-40 md:pt-0 px-10'>
      <div className='flex flex-col items-start flex-grow text-left lg:flex-row lg:items-center lg:justify-stretch lg:pt-32'>
        <div className='relative z-10 lg:w-1/2'>
          <div className='heading block mb-12 relative leading-none font-heading font-medium text-4xl sm:text-5xl md:text-6xl'>
            <div className='inline-block relative'>
              <h1
                className='relative z-10 leading-tight my-0 font-medium'
                style={{ fontSize: 'inherit' }}
              >
                Building Software
              </h1>
              <span className='primary-border bg-primary mt-10' />
            </div>
          </div>
          <p
            className='text-gray-300 font-regular text-lg mt-4'
            style={{ lineHeight: 1.8 }}
          >
            Hi, I'm Jack, a full stack web developer based in Vancouver. <br />I
            love building fun things and solving problems through code.
          </p>
          <div className='flex items-center mt-10 space-x-10'>
            <Link
              className='cursor-pointer inline-flex items-center justify-center font-sans font-medium leading-7 transition outline-none focus:outline-none is-type-primary'
              to='Projects'
              aria-label={`scroll to Projects section`}
              offset={50}
              spy
              smooth
            >
              <span className='relative z-10'>Explore Projects</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
