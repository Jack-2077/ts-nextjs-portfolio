import React, { ReactNode } from 'react';
import styled from 'styled-components';

import '@theme-toggles/react/css/Expand.css';
import { Expand } from '@theme-toggles/react';

type Props = {
  children: ReactNode;
  // any props that come into the component
};

const Container = styled.div`
  z-index: 10;
  top: 0;
  position: sticky;

  & > div {
    opacity: 0.8;
    width: 100%;
    height: 100%;
    top: 0;
    position: absolute;
  }
`;

//0.5px solid rgba(220, 220, 220, 0.85);
//border-bottom: 0.5px solid rgb(35, 35, 35);

const StyledNav = styled.nav`
  padding: 1.5rem;
  backdrop-filter: blur(4px);
  border-bottom: 2px solid ${({ theme }) => theme.border};
  transition: border 0.35s linear;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > span {
    color: hsl(230deg, 100%, 69%);
    font-weight: 500;
    font-size: 24px;
    letter-spacing: -1px;
    /* font-family: 'Wotfard', Futura, -apple-system, sans-serif; */
  }

  ul {
    list-style: none;
    display: flex;
    gap: 10em;
  }
  button > svg {
    color: rgb(173, 173, 173);
    width: 1.66em;
    height: 1.66em;
    opacity: 0.8;

    &:hover {
      opacity: 1;

      transition: opacity 0.2s;
    }
  }
`;

export default function Navbar({ toggleThemeHandler }: any) {
  return (
    <Container>
      <div></div>
      <StyledNav>
        <span>JACK</span>
        <ul>
          <li>About</li>
          <li>Projects</li>
          <li>
            <span onClick={toggleThemeHandler}>
              <Expand />
            </span>
          </li>
        </ul>
      </StyledNav>
    </Container>
  );
}
