import type { AppProps } from 'next/app';
import { Navbar, Footer } from '../components';
import { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from '../styles/ThemeConfig';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState('dark');

  const toggleTheme = () => {
    theme == 'light' ? setTheme('dark') : setTheme('light');
  };

  return (
    <ThemeProvider theme={theme == 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <Navbar toggleThemeHandler={toggleTheme} />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
