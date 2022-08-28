import Image from 'next/future/image';
import React from 'react';
import styled from 'styled-components';
import { Layout } from '../layout';

import { Gmail, Linkedin, Github } from '@icons-pack/react-simple-icons';

const socials = [
  {
    title: 'Gmail',
    Icon: Gmail,
    link: 'mailto:jack.john.viannay@gmail.com',
    fill: '#d14836',
  },
  {
    title: 'Linkedin',
    Icon: Linkedin,
    link: 'https://linkedin.com/in/jack-john-9a8750229/',
    fill: '#0077b5',
  },
  {
    title: 'Github',
    Icon: Github,
    link: 'https://github.com/Jack-2077',
    fill: '#ff9300',
  },
];

const StyledContainer = styled.div`
  display: flex;

  justify-content: space-around;
  margin: 2em auto;

  .image-container {
    text-align: center;

    img {
      border-radius: 130px;
    }
  }
  .description {
    line-height: 1.65;
    width: 60%;
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;

    .description {
      width: 100%;
    }

    .image-container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
`;

const StyledSocialContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 2em 1em;
  width: 11em;
`;

interface Props {
  fillColor: string;
}

const StyledIcon = styled.span<Props>`
  svg {
    transition: fill 200ms, color 0.35s linear;
    color: ${({ theme }) => theme.text};
  }
  svg:hover {
    fill: ${(props) => props.fillColor};
  }
`;

export default function About() {
  return (
    <Layout title='ABOUT' id='About'>
      <StyledContainer>
        <div className='image-container'>
          <Image
            src='/assets/profile.png'
            height={200}
            width={200}
            quality={100}
            alt='A photograph of Jack John'
          />
          <StyledSocialContainer>
            {socials.map(({ title, Icon, link, fill }) => (
              <a
                href={link}
                role='link'
                aria-label={`Open Jack's ${title}`}
                target='_blank'
                rel='noopener noreferrer'
                key={title}
              >
                <StyledIcon fillColor={fill}>
                  <Icon />
                </StyledIcon>
              </a>
            ))}
          </StyledSocialContainer>
        </div>
        <div className='description'>
          <p>
            Hello! I&apos;m Jack, a Computer Science graduate from Langara
            College (Vancouver, BC). I am passionate about coding and solving
            problems through code, and I am excited to work alongside other
            amazing programmers and learn so much more!
            <br />
            <br />
            Looking for an opportunity to use my skills that I acquired during
            my studies with a creative and ambitious team. Currently able to
            work Full Time with PGWP.
          </p>
        </div>
      </StyledContainer>
    </Layout>
  );
}
