import React from 'react';
import { Layout } from '../layout';
import Image from 'next/future/image';
import styled from 'styled-components';

const StyledContainer = styled.div`
  display: grid;
  grid-template-areas:
    'image'
    'header';
  grid-template-columns: auto;
  text-align: center;
  margin: 2em auto;
  justify-content: center;

  .img-container {
    grid-area: image / image / image / image;
    width: 5em;
    margin: auto auto 1em;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  .description {
    grid-area: header / header / header / header;
    place-items: center;

    & > p {
      &:nth-child(1) {
        font-weight: bold;
        font-size: 1.15em;
        margin: 0px;
      }

      &:nth-child(2) {
        font-weight: 300;
        line-height: 1.5;
        margin: 0px;
      }

      &:nth-child(3) {
        font-weight: 300;
        font-size: 0.9em;
        margin: 0px;
      }
    }
  }
`;

export default function Education() {
  return (
    <Layout title='Education'>
      <StyledContainer>
        <div className='img-container'>
          <Image
            role='img'
            width={100}
            height={100}
            src='/assets/Langara.png'
            alt='Langara College logo'
          />
        </div>
        <div className='description'>
          <p>Diploma in Computer Studies</p>
          <p>Langara College</p>
          <p>Jan 2020 - May 2022</p>
        </div>
      </StyledContainer>
    </Layout>
  );
}
