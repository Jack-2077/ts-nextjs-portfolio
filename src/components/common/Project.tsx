import React from 'react';
import styled from 'styled-components';

const StyledProjectContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: max-content;
  justify-content: center;
  margin: 0px;
  max-width: 120rem;
  width: 100%;

  @media only screen and (max-width: 75em) {
    width: 94%;
  }

  & > div {
    opacity: 1;
    transform: translate3d(0px, 0px, 0px);
    display: flex;
    height: 40rem;
    width: 100%;
    /* position: relative; */
    overflow: hidden;
    border-radius: 1rem;
    color: rgb(255, 255, 255);

    @media only screen and (max-width: 75em) {
      height: 100%;
    }

    &:not(:last-of-type) {
      margin-bottom: 3rem;
    }
  }
`;

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 8rem 10rem 10rem;
  margin-bottom: 3rem;
  border-radius: 1rem;
  background: linear-gradient(
    90deg,
    rgb(173, 52, 28) 0%,
    rgb(173, 52, 28) 56%,
    rgba(40, 40, 40, 0) 95%
  );

  @media only screen and (max-width: 75em) {
    /* padding: 5rem; */
    height: 100%;
  }

  /* background: linear-gradient(
    90deg,
    rgb(173, 52, 28) 0%,
    rgb(173, 52, 28) 56%,
    rgba(40, 40, 40, 0) 95%
  );
  height: 100%;
  padding: 8rem 10rem 10rem;
  width: 100%;
  @media only screen and (max-width: 75em) {
    padding: 5rem;
  } */
`;
export default function Project({ children }: { children: React.ReactNode }) {
  return <StyledProject>{children}</StyledProject>;
}
