import demoReel from '../../../public/assets/demo-reel.png';
import tuned from '../../../public/assets/tuned.jpg';
import spotified from '../../../public/assets/spotified.jpg';
import prattle2 from '../../../public/assets/prattle-v2.jpg';

type StaticImageData = {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
};

export interface projectDataType {
  id: number;
  title: string;
  description: string;
  stack: string[];
  repoLink: string;
  demoLink?: string;
  img: string | StaticImageData;
}

const ProjectsData: projectDataType[] = [
  {
    id: 1,
    title: 'Demo Reel Showcase',
    description:
      'Portfolio website for a client working in the vfx industry to showcase all of his reels and photos',
    stack: [
      'Next.js',
      'AWS S3',
      'CloudFront CDN',
      'Framer Motion',
      'CSS Modules',
    ],
    repoLink: 'https://github.com/Jack-2077/demo-reel-showcase-nextjs',
    demoLink: 'https://www.kalllikadaproductions.ca/',
    img: demoReel,
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
    img: tuned,
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
    img: spotified,
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
    img: prattle2,
  },
  {
    id: 5,
    title: 'Prattle-v1',
    description: 'Full Stack application',
    stack: ['React', 'MaterialUI', 'Node.js', 'Express.js', 'MongoDB'],
    repoLink: 'https://github.com/Jack-2077/Prattle',
    img: prattle2,
  },
];

export default ProjectsData;
