import React from 'react';
import SkillsData from '../../services/skills-svc';

export default function Skills() {
  return (
    <div className='container mx-auto lg:px-10 py-32 px-10'>
      <div className='heading block mb-12 relative leading-none font-heading font-medium text-5xl'>
        <div className='inline-block relative'>
          <h2 className='relative z-10 leading-tight my-0'>Tools & Skills</h2>
          <span className='mt-10 primary-border bg-primary' />
        </div>
      </div>
      <ul className='flex flex-wrap mt-20 -mx-3 p-0 list-none'>
        {SkillsData.map((skill) => (
          <li
            className='w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-3'
            key={skill.label}
          >
            <a
              href={skill.link}
              target='_blank'
              rel='noopener'
              className='tile flex flex-col relative outline-none focus:outline-none bg-shade-2 rounded-lg w-full text-center h-full px-10 py-8'
            >
              <div
                className='h-3 w-3 absolute pixel rounded-full'
                style={{ backgroundColor: skill.color }}
              />
              <div className='flex justify-center mb-6 skill-icon'>
                {skill.Icon}
              </div>
              <div className='font-semibold text-xl'>{skill.label}</div>
              <p
                className='text-gray-300 font-regular mt-4 font-mono text-sm'
                style={{ lineHeight: 1.8 }}
              >
                {skill.desc}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

{
  /* {SkillsData.map((skill) => (
        <div
          className='transform-none opacity-100 grid justify-items-center mt-0 mb-4 mx-4 w-12'
          key={skill.label}
        >
          <div className='w-12'>
            <span className='skill-icon'>{skill.Icon}</span>
          </div>
          <p>{skill.label}</p>
        </div>
      ))} */
}
