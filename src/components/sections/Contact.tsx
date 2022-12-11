import React from 'react';

type formProps = { label: string; placeHolder: string; inputType?: string };
const FormInput = ({ label, placeHolder, inputType }: formProps) => {
  const forAttribute = `input-${label}`;
  return (
    <div className='mb-8'>
      <label htmlFor={forAttribute} className='form-label'>
        {label}
      </label>
      {label !== 'Message' ? (
        <input
          id={forAttribute}
          type={inputType}
          required
          name={label}
          autoComplete={label}
          placeholder={placeHolder}
          className='form-input'
        />
      ) : (
        <textarea
          id={forAttribute}
          rows={4}
          name={label}
          placeholder={placeHolder}
          className='form-input'
        />
      )}
    </div>
  );
};
export default function Contact() {
  return (
    <section id='Contact' className='bg-shade-2 py-32 mt-0'>
      <div className='container mx-auto lg:px-10 px-10'>
        <div className='flex flex-wrap'>
          <div className='w-full lg:w-1/2'>
            <div className='heading block mb-12 relative leading-none font-heading font-medium text-5xl'>
              <div className='inline-block relative'>
                <h2
                  className='relative z-10 leading-tight my-0'
                  style={{ fontStyle: 'inherit' }}
                >
                  Contact
                </h2>
                <span className='primary-border bg-primary mt-10' />
              </div>
            </div>
            <p
              className='text-gray-300 font-regular mt-4'
              style={{ lineHeight: 1.8 }}
            >
              Want to work with me?
              <br />
              Send a message to{' '}
              <a
                rel='nofollow noreferrer noopener'
                href='mailto:jack.john.viannay@gmail.com'
                className='inline-flex items-center justify-center font-sans font-medium leading-7 transition outline-none focus:outline-none is-type-link'
              >
                <span className='relative z-10'>
                  jack.john.viannay@gmail.com
                </span>
              </a>
              <br />
              or use the contact form.
            </p>
          </div>
          <div className='w-full lg:w-1/2 mt-20 lg:mt-0'>
            <form
              action='https://formspree.io/f/mnqrelek'
              method='POST'
              className='form'
            >
              <div>
                <FormInput
                  label='Name'
                  inputType='text'
                  placeHolder='Michael Scott'
                />
                <FormInput
                  label='Email'
                  inputType='email'
                  placeHolder='m.scott@dundermifflin.com'
                />
                <FormInput
                  label='Message'
                  placeHolder='Where are the turtles?!'
                />
              </div>
              <div>
                <button className='inline-flex items-center justify-center font-sans font-medium leading-7 transition outline-none focus:outline-none is-type-primary'>
                  <span className='relative z-10'>Send</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
