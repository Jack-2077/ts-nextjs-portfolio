import React from 'react';
import styled from 'styled-components';
import { Project } from '../common';
import { Layout } from '../layout';
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

const StyledWrapper = styled.div`
  padding: 7rem 0px;
  width: 100%;
  background-color: rgb(24, 27, 37);
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: max-content;
    justify-content: center;
    margin: 0px;
    max-width: 120rem;
    width: 100%;

    @media only screen and (max-width: 75em) {
      width: 94%;
    }

    .card {
      opacity: 1;
      transform: translate3d(0px, 0px, 0px);
      display: flex;
      height: 40rem;
      width: 100%;
      /* position: relative; */
      overflow: hidden;
      border-radius: 1rem;
      color: rgb(255, 255, 255);

      @media only screen and (max-width: 75em) {
        height: 100%;
      }

      &:not(:last-of-type) {
        margin-bottom: 3rem;
      }
    }
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function Projects() {
  return (
    <Layout title='PROJECTS' id='Projects'>
      <StyledContainer>
        {projects.map((project) => (
          <Project key={project?.id}>{JSON.stringify(project)}</Project>
        ))}
      </StyledContainer>
      {/* <StyledWrapper>
        <div className='container'>
          <div className='card'>
            <Project>
              <p>hey</p>
            </Project>
          </div>
        </div>
      </StyledWrapper> */}
    </Layout>
  );
}
