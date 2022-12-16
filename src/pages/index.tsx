import type { GetStaticProps } from 'next';
import Head from 'next/head';
import { Home, About, Projects, Skills, Contact } from '../components/sections';
import { Navbar, Footer } from '../components/common';
import { projectsData, type projects } from '../services/data-svc';

interface Props {
  projectsData: projects[];
}

const HomePage = ({ projectsData }: Props) => {
  return (
    <div className='flex flex-col justify-between text-white layout bg-shade-1'>
      <Head>
        <title>Jack John</title>
        <meta name='description' content='Full Stack Developer' />
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/favicon/site.webmanifest' />
      </Head>
      <Navbar />
      <Home />
      <Projects data={projectsData} />
      <Skills />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { projectsData } };
};

export default HomePage;
