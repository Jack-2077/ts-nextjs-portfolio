import type { GetStaticProps } from 'next';
import { About, Projects, Skills, Education } from '../components/sections';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import { projectsData, type projects } from '../services/data-svc';

interface Props {
  projectsData: projects[];
}

const Home = ({ projectsData }: Props) => {
  return (
    <div className='flex flex-col justify-between text-white layout bg-shade-1'>
      <Navbar />
      <Projects data={projectsData} />
      <Skills />
      <About />
      <Education />
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: { projectsData } };
};

export default Home;
