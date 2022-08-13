import React from 'react';
import styled from 'styled-components';
import { Github } from '@icons-pack/react-simple-icons';

const FooterDivider = styled.div`
  width: 95%;
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
`;
const SourceSpan = styled.span`
  min-width: fill-available;
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
          <SourceSpan>View Source</SourceSpan>
          <span style={{ display: 'grid', alignItems: 'center' }}>
            <Github />
          </span>
        </StyledViewSource>
      </div>
    </footer>
  );
}
