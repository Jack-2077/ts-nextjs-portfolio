import Image from 'next/image';
import React from 'react';
import { type projects } from '../../services/data-svc';

export default function Projects({ data }: { data: projects[] }) {
  return (
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
                className='text-gray-300 font-regular text-sm mt-4'
                style={{ lineHeight: 1.8 }}
              >
                {project.description}
              </p>
            </div>
            <div className='flex mt-12 items-center'>
              <a
                rel='nofollow noreferrer noopener'
                href={project.demoLink}
                target='_blank'
                className='inline-flex items-center justify-center font-sans font-medium leading-7 transition outline-none focus:outline-none mr-10 is-type-primary'
              >
                <span className='relative z-10'>Open App</span>
              </a>
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
  );
}

{
  /* <div className='flex flex-wrap -mx-3'>
      {data.map((project) => (
        <div className='md:w-1/3 p-3' key={project.id}>
          <a
            href='/projects/inhuman'
            className='tile flex flex-col relative outline-none focus:outline-none bg-shade-2 rounded-lg h-full project-container'
          >
            <div className='h-96 rounded-t-lg overflow-hidden'>
              <div
                className='flex-1 flex projects-center h-full p-8'
                style={{
                  background: project.color,
                }}
              >
                <div className='w-full'>
                  <Image
                    alt='Screenshot/Mock-up of the project: Inhuman'
                    src={project.img}
                    width={800}
                    className='object-contain h-full w-full image md:rounded-lg shadow-xl g-image g-image--loaded'
                  />
                </div>
              </div>
            </div>
            <div className='p-8 flex flex-1 flex-col justify-between'>
              <div>
                <h3 className='text-4xl font-medium font-heading leading-none mb-6'>
                  Inhuman
                </h3>
                <div className='flex flex-wrap mt-6'>
                  {project.stack.map((item: string) => (
                    <div className='tag border border-shade-5 text-xs px-2 py-1 font-mono whitespace-no-wrap text-gray-300 uppercase tracking-widest font-medium mr-3 mb-3 rounded-sm'>
                      {item}
                    </div>
                  ))}
                </div>
                <p
                  className='text-gray-300 font-regular text-sm mt-4'
                  style={{ lineHeight: 1.8 }}
                >
                  A growing collection of skill-based singleplayer minigames
                  revolving around reaction time, keyboard and mouse skills,
                  problem solving and math. Some games have multiple variants
                  and modes. All games can be played locally without any
                  sign-up, but there are also online leaderboards and accounts
                  for those who want to compete against others.
                </p>
              </div>
              <div className='mt-8 text-gray-400 text-sm flex justify-between projects-center'>
                <div>
                  <div
                    title='This project is still work in progress. That means it is not finished and will be improved in the future.'
                    className='inline-block text-sm font-semibold rounded-b text-primary cursor-help'
                  >
                    Work in Progress
                  </div>
                </div>
                <span>Since November 2021</span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div> */
}
