import React from 'react';
import { Layout } from '../';
const projects = [
  {
    id: 1,
    title: 'Demo Reel Showcase',
    description: 'Portfolio website for a client working in the vfx industry',
    stack: [
      'Next.js',
      'AWS S3',
      'CloudFront CDN',
      'Framer Motion',
      'CSS Modules',
    ],
    repoLink: 'https://github.com/Jack-2077/demo-reel-showcase-nextjs',
    demoLink: 'https://www.kalllikadaproductions.ca/',
  },
  {
    id: 2,
    title: 'Tuned',
    description: 'Portfolio website for a client working in the vfx industry',
    stack: [
      'React',
      'React Player',
      'Redux ToolKit',
      'RTK Query',
      'Supabase',
      'Styled-Components',
    ],
    repoLink: 'https://github.com/Jack-2077/Tuned',
    demoLink: 'https://tuned-tracks.vercel.app/',
  },

  {
    id: 3,
    title: 'Spotified',
    description: 'Portfolio website for a client working in the vfx industry',
    stack: [
      'React.js',
      'Spotify API',
      'Node.js',
      'Express.js',
      'Styled-Component',
    ],
    repoLink: 'https://github.com/Jack-2077/Spotified',
  },
  {
    id: 4,
    title: 'Prattle-v2',
    description: 'Portfolio website for a client working in the vfx industry',
    stack: [
      'Angular',
      'Typescript',
      'Flask',
      'Python',
      'Auth0',
      'Socket.io',
      'jQuery',
      ' Angular Material',
    ],
    repoLink: 'https://github.com/Jack-2077/Prattle-v2',
  },
  ,
  {
    id: 5,
    title: 'Prattle-v1',
    description: 'Portfolio website for a client working in the vfx industry',
    stack: ['React', 'MaterialUI', 'Node.js', 'Express.js', 'MongoDB'],
    repoLink: 'https://github.com/Jack-2077/Prattle',
  },
];

export default function Projects() {
  return <Layout title='Projects'>Projects</Layout>;
}
