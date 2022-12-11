import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

import Image from 'next/image';

export default function Navbar() {
  const [currentSection, setCurrentSection] = useState('');
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      setIsTransparent(window.scrollY > 200);
    };
    window.addEventListener('scroll', changeBackground);

    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <header
      className={`header fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-transparent ${
        isTransparent ? 'is-scrolled' : ''
      }`}
    >
      <div className='container mx-auto lg:px-10 px-5'>
        <nav className='flex justify-between nav md:justify-start lg:-ml-5'>
          <a
            href='/'
            aria-current='page'
            className='inline-flex items-center pr-5 flex-shrink-0 pl-5 mr-10 active--exact active'
            title='Jack'
          >
            <Image
              src='/logo.svg'
              alt='logo'
              width={25}
              height={25}
              quality={100}
            />
          </a>
          <div className='hidden space-x-3 md:flex'>
            {['Projects', 'About', 'Contact'].map((section) => (
              <Link
                activeClass='active--exact active'
                className='relative nav-link'
                to={section}
                aria-label={`scroll to ${section} section`}
                onSetActive={(section) => setCurrentSection(section)}
                offset={50}
                spy
                smooth
                key={section}
              >
                <span className='block'>{section}</span>
              </Link>
            ))}
          </div>
          <div className='flex md:hidden'>
            <button className='nav-link nav-control'>Menu</button>
          </div>
        </nav>
      </div>
      <div className='menu md:hidden'>
        <div className='menu-content'>
          <a
            href='/'
            aria-current='page'
            className='inline-flex items-center pr-5 flex-shrink-0 self-start px-6 py-5 active--exact active'
            title='Jack'
          >
            J
          </a>
          <button className='absolute nav-link nav-control nav-close'>
            Close
          </button>
          <a
            href='/'
            aria-current='page'
            className='relative nav-link active--exact active'
          >
            <span className='block'>Home</span>
          </a>
          <a href='/projects' className='relative nav-link'>
            <span className='block'>Projects</span>
          </a>
          <a href='/contact' className='relative nav-link'>
            <span className='block'>Contact</span>
          </a>
        </div>
        <div className='menu-bg' />
      </div>
    </header>
  );
}
