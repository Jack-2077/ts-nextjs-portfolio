import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#f8f9fa',
  text: '#363537',
  border: '#f1f3f5',
  borderTop: '#e6e8eb',
  background: '#363537',
  flipWhiteColor: '#000000',
};

export const darkTheme = {
  body: '#1c1c1c',
  text: '#FAFAFA',
  border: '#232323',
  borderTop: '#343434',
  background: '#999',
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
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Arial, Helvetica, sans-serif;
    transition: all 0.35s linear;
  }
`;
