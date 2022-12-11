import Image from 'next/image';
import React from 'react';
import { type projects } from '../../services/data-svc';

export default function Projects({ data }: { data: projects[] }) {
  return (
    <section id='Projects' className='container mx-auto lg:px-10 py-32 px-10'>
      <div className='heading block mb-12 relative leading-none font-heading font-medium text-5xl'>
        <div className='inline-block relative'>
          <h2 className='relative z-10 leading-tight my-0'>Projects</h2>
          <span className='mt-10 primary-border bg-primary' />
        </div>
      </div>
      <div className='container mx-auto lg:px-10 pb-32'>
        {data.map((project) => (
          <div
            className='flex flex-col lg:flex-row mt-20 items-stretch rounded-lg overflow-hidden'
            key={project.id}
          >
            <div className='bg-shade-2 lg:w-1/2 flex flex-col justify-between relative pt-0 px-10 lg:px-16 pb-10 lg:pb-16'>
              <div>
                <div className='mt-4 mb-8 flex flex-wrap'>
                  {project.stack.map((item: string) => (
                    <div
                      className='tag border border-shade-5 text-xs px-2 py-1 font-mono whitespace-no-wrap text-gray-300 uppercase tracking-widest font-medium mr-3 mb-3 rounded-sm'
                      key={`${project.id}-${item}`}
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <h3 className='text-5xl font-heading font-medium leading-none mb-3'>
                  {project.title}
                </h3>
                <p
                  className='text-gray-300 font-regular text-base mt-4'
                  style={{ lineHeight: 1.8 }}
                >
                  {project.description}
                </p>
              </div>
              <div className='flex mt-12 items-center'>
                {project.demoLink && (
                  <a
                    rel='nofollow noreferrer noopener'
                    href={project.demoLink}
                    target='_blank'
                    className='inline-flex items-center justify-center font-sans font-medium leading-7 transition outline-none focus:outline-none mr-10 is-type-primary'
                  >
                    <span className='relative z-10'>Open App</span>
                  </a>
                )}
                <a
                  href={project.repoLink}
                  className='inline-flex items-center justify-center font-sans font-medium leading-7 transition outline-none focus:outline-none is-type-link'
                  rel='nofollow noreferrer noopener'
                >
                  <span className='relative z-10'>View Code</span>
                </a>
              </div>
            </div>
            <a
              href={project.demoLink}
              className='lg:w-1/2 relative order-first lg:order-last flex flex-col'
            >
              <div
                className='flex-1 flex items-center p-12'
                style={{ background: project.color }}
              >
                <div className='w-full'>
                  <Image
                    alt={`Screenshot/Mock-up of the project: ${project.title}`}
                    src={project.img}
                    width='1859'
                    className='object-contain h-full w-full image md:rounded-lg shadow-xl g-image g-image--lazy g-image--loaded'
                  />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
