export interface dataType {
  id: number;
  title: string;
  description: string;
  stack: string[];
  repoLink: string;
  demoLink?: string;
}

const ProjectsData: dataType[] = [
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
    description:
      'Web app for adding and playing your favorite tracks from youtube and soundcloud in one place',
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
    description: 'Full Stack web app for visualizing personalized Spotify data',
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
    description: 'Full Stack instant messaging application',
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
  {
    id: 5,
    title: 'Prattle-v1',
    description: 'Full Stack application',
    stack: ['React', 'MaterialUI', 'Node.js', 'Express.js', 'MongoDB'],
    repoLink: 'https://github.com/Jack-2077/Prattle',
  },
];

export default ProjectsData;
