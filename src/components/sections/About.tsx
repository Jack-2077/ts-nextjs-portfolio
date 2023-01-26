import Image from 'next/image';
import React from 'react';

export default function About() {
  return (
    <section className='bg-shade-2 py-32 mt-0' id='About'>
      <div className='container mx-auto lg:px-10 px-10'>
        <div className='heading block mb-12 relative leading-none font-heading font-medium text-5xl'>
          <div className='inline-block relative'>
            <h2
              className='relative z-10 leading-tight my-0'
              style={{ fontSize: 'inherit' }}
            >
              About me
            </h2>
            <span className='primary-border bg-primary mt-10' />
          </div>
        </div>
        <div className='md:flex mt-16'>
          <div className='flex-shrink-0 mr-12'>
            <Image
              src='/profile.png'
              height={200}
              width={200}
              quality={100}
              className='h-56 w-56 g-image g-image--lazy g-image--loaded rounded-full'
              alt='A photograph of Jack John'
            />
          </div>

          <div className='mt-12 md:mt-0 max-w-4xl'>
            <p
              className='text-gray-300 font-regular text-lg'
              style={{ lineHeight: 1.8 }}
            >
              Hello! I'm Jack, a Computer Science graduate from Langara College
              (Vancouver, BC). I am passionate about coding and solving problems
              through code, and I am excited to work alongside other amazing
              programmers and learn so much more!
              <br />
              <br />
              Looking for an opportunity to use my skills and experience with a creative and ambitious team. Currently able to
              work Full Time with work permit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
