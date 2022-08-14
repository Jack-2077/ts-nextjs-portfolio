import React from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  h2 {
    font-size: 2em;
    font-family: 'Bebas Neue', cursive;
    font-weight: 400;
    letter-spacing: 1px;
    padding-bottom: 0.5em;
    border-bottom: 2px solid ${({ theme }) => theme.borderTop};
    margin: auto;
    text-align: center;
    transition: border 0.35s linear;
  }

  & > div {
    padding: 1em 2em;
    /* max-width: 85%; */
    /* margin: auto;
    @media (min-width: 1200px) {
      max-width: 800px;
    } */
  }
`;
export default function Layout({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <StyledSection>
      <h2>{title}</h2>
      <div>{children}</div>
    </StyledSection>
  );
}
