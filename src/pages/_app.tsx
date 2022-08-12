import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Navbar, Footer } from '../components';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
