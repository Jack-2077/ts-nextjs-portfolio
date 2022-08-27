import Image from 'next/future/image';
import React from 'react';
import styled from 'styled-components';
import { Layout } from '../layout';

import { Gmail, Linkedin, Github } from '@icons-pack/react-simple-icons';

type socialsType = {
  title: string;
  Icon: any;
  link: string;
  fill: string;
};

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

  .image-container {
    text-align: center;

    img {
      border: 5px solid white;
      border-radius: 130px;
    }
  }
  .description {
    width: 60%;
    padding-top: 5%;
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
    transition: fill 200ms;
    color: ${({ theme }) => theme.flipWhiteColor};
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
            src='/assets/Langara.png'
            height={100}
            width={100}
            alt='Logo of Langara College'
          />
          <StyledSocialContainer>
            {socials.map(({ title, Icon, link, fill }: socialsType) => (
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
          Hello! I'm Jack, a Computer Science graduate from Langara College
          (Vancouver, BC). I focus on using my diverse skill set to deliver
          effective solutions to problems at any level of the application stack.
          Passionate, well-organized person, problem solver, with strong
          attention to detail.
        </div>
      </StyledContainer>
    </Layout>
  );
}
