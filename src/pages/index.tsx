import type { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { About, Projects, Skills } from '../components/sections';
import { ProjectsData, type projectDataType } from '../services/data-svc';

interface Props {
  ProjectsData: projectDataType[];
}

const StyledContainer = styled.div`
  padding: 0 2rem;

  header {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: max-content;
    height: 100vh;
    justify-content: space-around;
    justify-content: center;
    margin: 0px;
    max-width: 120rem;

    width: 100%;
    & > p {
      &:nth-child(1) {
        color: rgb(221, 69, 124);
        margin: 0px 0px 0.5rem;
        max-width: none;
        font-weight: 300;
      }

      &:nth-child(2) {
        color: rgb(255, 255, 255);
        font-size: 6rem;
        font-weight: 900;
        letter-spacing: -3px;
        line-height: 1.2;
        white-space: nowrap;
      }

      &:nth-child(3) {
        color: rgba(255, 255, 255, 0.65);
        margin: 2.5rem 0px;
        max-width: 400px;
        font-weight: 300;
      }
    }
  }

  @media only screen and (max-width: 650px) {
    padding: 0;
  }
`;

const Home = ({ ProjectsData }: Props) => {
  return (
    <StyledContainer>
      <Head>
        <title>Jack John</title>
        <meta name='description' content='Full Stack Developer' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header>
        <p>Hi, my name is</p>
        <p>Jack John</p>
        <p>
          I'm a web developer based in Vancouver, BC specializing in building
          high-quality websites and applications.
        </p>
      </header>
      <main>
        <Projects ProjectsData={ProjectsData} />
        <Skills />
        <About />
      </main>
    </StyledContainer>
  );
};

export const getStaticProps = async () => {
  return { props: { ProjectsData } };
};

export default Home;
