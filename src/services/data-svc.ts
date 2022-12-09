import demoReel from '../../public/demo-reel.png';
import tuned from '../../public/tuned.jpg';
import spotified from '../../public/spotified.jpg';
import prattle2 from '../../public/prattle-v2.jpg';
import todolist from '../../public/todo-list.jpg';

export interface projects {
  id: number;
  title: string;
  description: string;
  stack: string[];
  repoLink: string;
  demoLink?: string;
  img: {
    src: string;
    height: number;
    width: number;
    blurDataURL: string;
    blurWidth: number;
    blurHeight: number;
  };
  color: string;
}

export const projectsData = [
  {
    id: 1,
    title: 'Demo Reel Showcase',
    description:
      'A Portfolio website for a visual effects artist to showcase all of his reels and photos. Configured Amazon S3 to efficiently deliver files with low latency over CloudFront CDN.',
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
      'A free tool to add and play videos from youtube and tracks from soundcloud without any advertisements in between. It does this by using the YouTube iFrame Player API and SoundCloud Widget API. Able to customize the thumbnails and title of the media added.',
    stack: [
      'React',
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
      'A Full Stack web application for visualizing personalized Spotify data using Spotify API. View your top 100 artists, songs and more. Sort your playlist based on BPM, Danceability and Popularity.',
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
    description:
      'This is a fun project that I made in my final semester in school with another team member. Prattle is a full stack instant messaging application built in Angular and Flask. Was responsible for integrating Socket.io, user authentication and modelling a NoSQL database for storing and retrieving user messages.',
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
      'This is a revamped version of my very first application in React. Main objective was to learn and explore a state management library and graphql queries for fetching data in a PostgreSQL database.',
    stack: ['React', 'Apollo Client', 'GraphQL', 'Postgres'],
    demoLink: 'https://todolist-v2-apollo.vercel.app',
    repoLink: 'https://github.com/Jack-2077/Todo-App',
    img: todolist,
    color: '#ff6665',
  },
];
