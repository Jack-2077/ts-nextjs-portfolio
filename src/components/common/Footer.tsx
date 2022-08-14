import React from 'react';
import styled from 'styled-components';
import { Github } from '@icons-pack/react-simple-icons';

const FooterDivider = styled.div`
  width: 100%;
  border-top: 2px solid ${({ theme }) => theme.borderTop};
  transition: border 0.35s linear;
`;
const StyledViewSource = styled.a`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8em;
  margin: 0;

  &:hover {
    opacity: 0.8;
  }

  svg {
    width: 1em;
    margin-left: 0.5em;
    &:hover {
      transition: fill 200ms;
    }
  }

  .sourceSpan {
    min-width: fill-available;
  }

  .svgSpan {
    display: grid;
    align-items: center;
  }
`;

export default function Footer() {
  return (
    <footer>
      <FooterDivider />
      <div style={{ display: 'grid', justifyItems: 'center' }}>
        <StyledViewSource
          href='https://github.com/Jack-2077/ts-nextjs-portfolio'
          target='_blank'
        >
          <span className='sourceSpan'>View Source</span>
          <span className='svgSpan'>
            <Github />
          </span>
        </StyledViewSource>
      </div>
    </footer>
  );
}
