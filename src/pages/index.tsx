import type { NextPage } from 'next';
import { About, Projects, Skills, Education } from '../components/sections';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col justify-between text-white layout bg-shade-1'>
      <Navbar />
      <Projects />
      <Skills />
      <About />
      <Education />
      <Footer />
    </div>
  );
};

export default Home;
