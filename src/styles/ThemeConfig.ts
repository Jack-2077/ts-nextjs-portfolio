import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  background: '#f8f9fa',
  secondary: '#ff284d',
  text: '#000000',
  border: '#f1f3f5',
  borderTop: '#e6e8eb',
  flipWhiteColor: '#000000',
};

export const darkTheme = {
  background: '#1c1c1c',
  secondary: '#ff284d',
  text: '#ffffff',
  border: '#232323',
  borderTop: '#343434',
  flipWhiteColor: '#ffffff',
};

export const GlobalStyles = createGlobalStyle`

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

html,
body {
  padding: 0;
  margin: 0;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
}

footer {
  margin: 1em 0px 0px;
  padding: 1em;
}
  body {
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","Roboto","Oxygen","Ubuntu","Cantarell","Fira Sans","Droid Sans","Helvetica Neue",sans-serif;
    transition: all 0.35s linear;
  }
`;
