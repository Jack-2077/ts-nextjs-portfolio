import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

import '@theme-toggles/react/css/Expand.css';
import { Expand } from '@theme-toggles/react';

interface toggleThemeType {
  toggleThemeHandler: () => void;
}

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

const StyledNav = styled.nav`
  padding: 0.3rem 1.2rem;
  backdrop-filter: blur(10px);
  border-bottom: 2px solid ${({ theme }) => theme.border};
  transition: border 0.35s linear;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 4rem;

  & > span {
    color: hsl(230deg, 100%, 69%);
    font-weight: 500;
    font-size: 24px;
    letter-spacing: -1px;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;

    @media (min-width: 945px) {
      width: 35%;
    }

    @media (max-width: 550px) {
      width: 75%;
    }
  }

  a {
    cursor: pointer;
  }
  li a:hover {
    color: rgb(221, 69, 124);
    transition: color 0.2s ease-in-out;
  }
  .aria-invisible {
    border: 0px;
    clip: rect(0px, 0px, 0px, 0px);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0px;
    position: absolute;
    width: 1px;
  }
  .active-section {
    color: rgb(221, 69, 124);
    border-bottom: 2px solid rgb(221, 69, 124);

    &:hover {
      color: ${(props) => props.theme.flipWhiteColor};
      transition: color 0.2s ease-in-out;
    }
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

export default function Navbar({ toggleThemeHandler }: toggleThemeType) {
  const [currentSection, setCurrentSection] = useState('');
  return (
    <Container>
      <div></div>
      <StyledNav>
        <span>Jack</span>
        <ul role='list'>
          <span className='aria-invisible'>
            current section: {currentSection}
          </span>
          {['Projects', 'About'].map((section) => (
            <li key={section}>
              <Link
                activeClass='active-section'
                to={section}
                aria-label={`scroll to ${section} section`}
                onSetActive={(section) => setCurrentSection(section)}
                offset={-90}
                spy
                smooth
              >
                {section}
              </Link>
            </li>
          ))}
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
