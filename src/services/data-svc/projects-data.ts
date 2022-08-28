import demoReel from '../../../public/assets/demo-reel.png';
import tuned from '../../../public/assets/tuned.jpg';
import spotified from '../../../public/assets/spotified.jpg';
import prattle2 from '../../../public/assets/prattle-v2.jpg';
import todolist from '../../../public/assets/todo-list.jpg';

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
  color: string;
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
    color: '#ba6031',
  },
  {
    id: 2,
    title: 'Tuned',
    description:
      'Web app for adding and playing your favorite tracks from youtube and soundcloud',
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
    color: '#bb86fc',
  },
  {
    id: 3,
    title: 'Spotified',
    description:
      'Full Stack web app for visualizing personalized Spotify data using Spotify API',
    stack: [
      'React.js',
      'Spotify API',
      'Node.js',
      'Express.js',
      'Styled-Component',
    ],
    repoLink: 'https://github.com/Jack-2077/Spotified',
    img: spotified,
    color: '#121212',
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
      'Angular Material',
    ],
    repoLink: 'https://github.com/Jack-2077/Prattle-v2',
    img: prattle2,
    color: '#a744d1',
  },
  {
    id: 5,
    title: 'Todo-App-v2',
    description:
      'A updated version with a state management library and graphql queries to fetch data',
    stack: ['React', 'Apollo Client', 'GraphQL', 'Postgres'],
    demoLink: 'https://todolist-v2-apollo.vercel.app',
    repoLink: 'https://github.com/Jack-2077/Todo-App',
    img: todolist,
    color: '#ff6665',
  },
];

export default ProjectsData;
