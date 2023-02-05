import React from 'react';

export default function Footer() {
  return (
    <footer>
      <section className='py-10 bg-shade-0'>
        <div className='container mx-auto lg:px-10 px-10'>
          <div className='flex flex-col flex-wrap xl:flex-row'>
            <div className='mt-10 xl:w-1/2 xl:mt-0'>
              <p
                className='text-gray-300 font-regular flex items-center font-mono text-sm'
                style={{ lineHeight: 1.8 }}
              >
                <span className='relative inline-block mr-2 text-2xl leading-none top-px'>
                  ©
                </span>
                2022 Jack, All Rights Reserved
              </p>
            </div>
            <div className='flex flex-wrap order-first xl:order-last xl:w-1/2 xl:justify-end'>
              <p
                className='text-gray-300 font-regular flex flex-col items-start space-y-3 md:flex-row md:space-y-0 font-mono text-sm'
                style={{ lineHeight: 1.8 }}
              >
                <a
                  rel='noopener'
                  target='_blank'
                  href='mailto:jack.john.viannay@gmail.com'
                  className='inline-flex items-center justify-center font-sans font-medium leading-7 transition outline-none focus:outline-none mr-6  is-type-link'
                >
                  <span className='relative z-10'>Gmail</span>
                </a>

                <a
                  rel='noopener'
                  target='_blank'
                  href='https://linkedin.com/in/JackJohnViannay/'
                  className='inline-flex items-center justify-center font-sans font-medium leading-7 transition outline-none focus:outline-none mr-6  is-type-link'
                >
                  <span className='relative z-10'>LinkedIn</span>
                </a>

                <a
                  rel='noopener'
                  target='_blank'
                  href='https://github.com/Jack-2077'
                  className='inline-flex items-center justify-center font-sans font-medium leading-7 transition outline-none focus:outline-none mr-6  is-type-link'
                >
                  <span className='relative z-10'>Github</span>
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
