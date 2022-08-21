import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import { ExternalLinkIcon } from './';

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

const StyledProjecttt = styled.div`
  margin-top: 2em;
  width: 100%;
  height: 20rem;
  background: linear-gradient(
    90deg,
    rgb(18, 18, 18) 0%,
    rgb(18, 18, 18) 56%,
    rgba(40, 40, 40, 0) 95%
  );
  border-radius: 1rem;

  &:not(:last-of-type) {
    margin-bottom: 3rem;
  }

  .project {
    display: flex;
    flex-direction: column;
    padding-left: 2rem;

    &__heading {
      font-weight: 500;
      font-size: 2rem;
    }

    &__techStack {
      list-style: none;
      width: 100%;
      max-width: 45rem;
      display: flex;
      flex-wrap: wrap;
      margin: 10px 0 30px 0;
      padding-left: 0;

      li {
        background-color: #fafafa1b;
        padding: 8px;
        text-align: center;
        border-radius: 150px;
        margin-right: 5px;
        margin-top: 10px;
        line-height: 1;

        p {
          font-size: 11px;
          color: #fafafa;
        }
      }

      @media only screen and (max-width: ${750 / 16}em) {
        justify-content: center;
        .tag-item p {
          font-size: 10px;
          color: #fafafa;
        }
      }
    }
  }

  /* margin-bottom: 3rem;
  height: 40rem;
  width: 100%;
  overflow: hidden;
  border-radius: 1rem;
  color: rgb(255, 255, 255);
  display: flex;

  @media only screen and (max-width: 75em) {
    height: 100%;
  }

  .project {
    display: flex;
    flex-direction: column;
    background: linear-gradient(
      90deg,
      rgb(18, 18, 18) 0%,
      rgb(18, 18, 18) 56%,
      rgba(40, 40, 40, 0) 95%
    );
    height: 100%;
    padding: 8rem 10rem 10rem;
    width: 100%;
    z-index: 10;

    @media only screen and (max-width: 75em) {
      padding: 5rem;
    }

    &__heading {
      color: rgb(255, 255, 255);
      font-weight: 500;
      font-size: 2.5rem;
    }

    &__description {
      padding: 2.5rem 0 0 0;
      font-size: 1.4rem;
      font-weight: 300;
      max-width: 45rem;
    }

    &__techStack {
      width: 100%;
      max-width: 45rem;
      display: flex;
      flex-wrap: wrap;
      margin: 10px 0px 30px;
      list-style: none;
    }

    &__techStack li {
      background-color: rgba(250, 250, 250, 0.106);
      padding: 8px;
      text-align: center;
      border-radius: 100px;
      margin-right: 5px;
      margin-top: 10px;
      line-height: 1;
    }

    &__techStack li p {
      font-size: 11px;
      color: rgb(250, 250, 250);
    }

    &__btns {
      display: flex;
      justify-content: space-between;
      width: 34rem;
    }

    &__btns a {
      border: none;
      border-radius: 8px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-size: 1.4rem;
      text-transform: capitalize;
      transition: all 0.25s ease-in-out 0s;
      height: 4.5rem;
      min-width: 16rem;
      position: relative;
      background-color: rgb(84, 142, 177);
      color: rgb(255, 255, 255);
    }

    &__btns a + a {
      border-radius: 8px;
      position: relative;
      background-color: transparent;
      border: 1px solid rgb(255, 255, 255);
    }

    &__btns span {
      margin-right: 1rem;
    }

    &__img {
      display: inline-block;
      height: 100%;
      position: absolute;
      right: 0;
      width: 60rem;
      z-index: 0;
      div {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }
    svg {
      height: 16px;
      width: 16px;
    }
  } */

  //second
  /* .project__techStack li {
    background-color: rgba(250, 250, 250, 0.106);
    padding: 8px;
    text-align: center;
    border-radius: 100px;
    margin-right: 5px;
    margin-top: 10px;
    line-height: 1;
  }

  .project__techStack li p {
    font-size: 11px;
    color: rgb(250, 250, 250);
  }

  .project__btns {
    display: flex;
    justify-content: space-between;
    width: 34rem;
  }

  .project__btns a {
    border: none;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1.4rem;
    text-transform: capitalize;
    transition: all 0.25s ease-in-out 0s;
    height: 4.5rem;
    min-width: 16rem;
    position: relative;
    background-color: rgb(84, 142, 177);btns
    color: rgb(255, 255, 255);
  }

  .project__btns a + a {
    border-radius: 8px;
    position: relative;
    background-color: transparent;
    border: 1px solid rgb(255, 255, 255);
  }

  .project__btns span {
    margin-right: 1rem;
  }

  svg {
    height: 16px;
    width: 16px;
  } */
`;

const StyledProject = styled.div`
  margin-top: 2em;
  display: flex;
  width: 100%;
  border-radius: 1rem;
  background-color: lightcoral;
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
        background-color: #b34343;
        border: 0;
        border-radius: 0.5rem;
        font-size: 0.875rem;
        line-height: 1.25rem;
        padding: 0.75rem 3rem 0.75rem 2rem;
        cursor: pointer;
        text-transform: capitalize;
        transition: all 0.25s ease-in-out 0s;
        display: flex;

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
export default function Project({ children }: { children: React.ReactNode }) {
  return (
    <StyledProject>
      <div className='project'>
        <h3 className='project__heading' role='heading'>
          Demo Reel Showcase
        </h3>
        <p className='project__description' role='note'>
          Portfolio website for a client to showcase demo reels and pictures
        </p>

        <ul aria-label='tech stack' className='project__techStack'>
          <li>
            <p>Next.js</p>
          </li>
          <li>
            <p>AWS S3</p>
          </li>
          <li>
            <p>CloudFront CDN</p>
          </li>
          <li>
            <p>Framer Motion</p>
          </li>
          <li>
            <p>CSS Modules</p>
          </li>
        </ul>

        <div className='project__btns'>
          <a
            role='link'
            aria-label='view Fascio Product Bundler details'
            tabIndex={0}
            href='/project/3?web=true'
            className='StyledLinkBtn-sc-6mvqga-0 iDWWjt'
          >
            <button>
              <span>
                view code <ExternalLinkIcon />
              </span>
            </button>
          </a>
          <a
            role='link'
            aria-label='View Fascio Product Bundler site'
            target='_blank'
            rel='noopener noreferrer'
            href='https://fascio.herokuapp.com/'
          >
            <button>
              <span>
                see live site <ExternalLinkIcon />
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className='project__img'>
        <img src='/testimage.jpg' alt='' />
        {/* <Image role='img' layout='fill' src='/testimage.webp' /> */}
      </div>
    </StyledProject>
  );
}
