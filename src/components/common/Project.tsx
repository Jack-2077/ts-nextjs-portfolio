import React from 'react';
import Image from 'next/future/image';
import styled from 'styled-components';
import { ExternalLinkIcon } from './';
import { projectDataType } from '../../services/data-svc/projects-data';

interface Props {
  bgColor: string;
}

const adjust = (hexColor: string, magnitude: number) => {
  hexColor = hexColor.replace(`#`, ``);
  if (hexColor === '121212') {
    return '#ffffff';
  }
  if (hexColor.length === 6) {
    const decimalColor = parseInt(hexColor, 16);
    let r = (decimalColor >> 16) + magnitude;
    r > 255 && (r = 255);
    r < 0 && (r = 0);
    let g = (decimalColor & 0x0000ff) + magnitude;
    g > 255 && (g = 255);
    g < 0 && (g = 0);
    let b = ((decimalColor >> 8) & 0x00ff) + magnitude;
    b > 255 && (b = 255);
    b < 0 && (b = 0);
    return `#${(g | (b << 8) | (r << 16)).toString(16)}`;
  } else {
    return hexColor;
  }
};

const StyledProject = styled.div<Props>`
  color: white;
  margin-top: 2em;
  display: flex;
  width: 100%;
  border-radius: 1rem;
  background-color: ${(props) => props.bgColor || 'red'};
  padding-left: 2em;
  padding-right: 2em;
  gap: 2%;

  @media only screen and (max-width: 980px) {
    flex-direction: column;
    width: 65%;
  }

  @media only screen and (min-width: 710px) and (max-width: 810px) {
    width: 80%;
  }

  @media only screen and (max-width: 710px) {
    width: 100%;
  }

  @media only screen and (min-width: 1120px) {
    width: 85%;
  }

  .project {
    display: flex;
    flex-direction: column;
    justify-content: center;

    &__heading {
      font-size: 1.65rem;
      font-family: Arial, Helvetica, sans-serif;
    }

    &__description {
      padding: 1rem 0 0;
    }

    &__techStack {
      list-style: none;
      width: 100%;
      max-width: 45rem;
      display: flex;
      flex-wrap: wrap;
      margin: 10px 0 30px;

      li {
        background-color: rgba(250, 250, 250, 0.106);
        padding: 8px;
        text-align: center;
        border-radius: 100px;
        margin-right: 5px;
        margin-top: 10px;
        line-height: 1;

        p {
          font-size: 12px;
          margin: 0;
        }
      }
    }

    &__btns {
      display: flex;
      justify-content: flex-start;
      gap: 3em;

      button {
        background-color: ${(props) => adjust(props.bgColor, 45)};
        border: 0;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding: 0.75rem 3rem 0.75rem 2rem;
        cursor: pointer;
        text-transform: capitalize;
        transition: all 0.25s ease-in-out 0s;
        display: flex;

        /* @media only screen and (max-width: 520px) {
          padding: 0.75rem 1.8rem 0.75rem 0.3rem;
        } */

        span {
          flex-shrink: 0;
          max-width: 100%;
        }

        span svg {
          margin-left: 0.5rem;
        }
      }

      a + a button {
        border: 1px solid rgb(255, 255, 255);
        background-color: transparent;
      }

      button:hover {
        background-color: rgb(249, 250, 251);
      }
    }
  }

  .project__img {
    padding: 2em 0;
    img {
      width: 500px; //Any width you want to set the image to.
      max-width: 100%;
      height: auto;
    }
  }
`;
export default function Project({
  id,
  title,
  description,
  stack,
  repoLink,
  demoLink,
  img,
  color,
}: projectDataType) {
  return (
    <StyledProject bgColor={color}>
      <div className='project'>
        <h3 className='project__heading' role='heading'>
          {title}
        </h3>
        <p className='project__description' role='note'>
          {description}
        </p>

        <ul aria-label='tech stack' className='project__techStack'>
          {stack.map((item: string) => (
            <li key={`${id}-${item}`}>
              <p>{item}</p>
            </li>
          ))}
        </ul>
        <div className='project__btns'>
          <a
            role='link'
            aria-label={`View ${title} details`}
            tabIndex={0}
            href={repoLink}
          >
            <button>
              <span>
                view code <ExternalLinkIcon />
              </span>
            </button>
          </a>
          {demoLink && (
            <a
              role='link'
              aria-label={`View ${title} site`}
              target='_blank'
              rel='noopener noreferrer'
              href={demoLink}
            >
              <button>
                <span>
                  see live site <ExternalLinkIcon />
                </span>
              </button>
            </a>
          )}
        </div>
      </div>

      <div className='project__img'>
        <Image role='img' src={img} />
      </div>
    </StyledProject>
  );
}
