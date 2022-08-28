import type { AppProps } from 'next/app';
import { Navbar, Footer } from '../components/common';
import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../styles/ThemeConfig';
import Image from 'next/future/image';
import test from '../../public/test1.webp';
import styled from 'styled-components';

const TEST = styled.div`
  img {
    height: 100vh;
    width: 100vw;
    background: #ee9ca7; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to left,
      #ffdde1,
      #ee9ca7
    ); /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(
      to left,
      #ffdde1,
      #ee9ca7
    ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    /* opacity: 0.2; */
    /* transform: scale(1.05); */
    position: absolute;
    /* left: 0px; */
  }
`;
function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      {/* <TEST></TEST> */}
      <Navbar toggleThemeHandler={toggleTheme} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
