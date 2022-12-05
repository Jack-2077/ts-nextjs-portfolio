import React from 'react';
import Image from 'next/image';
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
};

const StyledProject = styled.div<Props>`
  color: white;
  margin-top: 2em;
  display: flex;
  width: 100%;
  border-radius: 1rem;
  background-color: ${(props) => props.bgColor};
  filter: drop-shadow(1px 2px 6px ${(props) => props.bgColor});
  padding: 2em;
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
      font-size: 1.8rem;
      font-weight: bold;
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

      @media only screen and (max-width: 520px) {
        gap: 1.8em;
      }

      a {
        background-color: ${(props) => adjust(props.bgColor, 45)};
        color: rgb(0, 0, 0);
        border: 0;
        border-radius: 0.5rem;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        font-size: 0.875rem;
        text-transform: capitalize;
        transition: all 0.25s ease-in-out 0s;
        height: 2.5rem;
        min-width: 8rem;

        @media only screen and (max-width: 380px) {
          min-width: 7rem;
        }

        svg {
          margin-left: 10px;
        }
      }

      a + a {
        border: 1px solid rgb(255, 255, 255);
        background-color: transparent;
      }

      a:hover {
        background-color: rgb(249, 250, 251);
      }
    }
  }

  .project__img {
    padding: 2em 0;
    img {
      width: 500px;
      max-width: 100%;
      height: auto;
    }
  }
`;
// export function Project({
//   id,
//   title,
//   description,
//   stack,
//   repoLink,
//   demoLink,
//   img,
//   color,
// }: projectDataType) {
//   return (
//     <StyledProject bgColor={color}>
//       <div className='project'>
//         <h3 className='project__heading' role='heading'>
//           {title}
//         </h3>
//         <p className='project__description' role='note'>
//           {description}
//         </p>

//         <ul aria-label='tech stack' className='project__techStack'>
//           {stack.map((item: string) => (
//             <li key={`${id}-${item}`}>
//               <p>{item}</p>
//             </li>
//           ))}
//         </ul>
//         <div className='project__btns'>
//           <a
//             role='link'
//             aria-label={`View ${title} details`}
//             tabIndex={0}
//             target='_blank'
//             rel='noopener noreferrer'
//             href={repoLink}
//           >
//             <span>view code</span>
//             <ExternalLinkIcon />
//           </a>
//           {demoLink && (
//             <a
//               role='link'
//               aria-label={`View ${title} site`}
//               target='_blank'
//               rel='noopener noreferrer'
//               href={demoLink}
//             >
//               <span>see live site</span>
//               <ExternalLinkIcon />
//             </a>
//           )}
//         </div>
//       </div>

//       <div className='project__img'>
//         <Image role='img' src={img} alt={`snapshot of ${title} website`} obje />
//       </div>
//     </StyledProject>
//   );
// }

const StyledProjectCard = styled.div<Props>`
  border-radius: 0.5rem;
  background-color: rgba(51, 54, 70, 1);
  height: 100%;
  .project {
    display: flex;
    flex-direction: column;

    &__img {
      border-top-left-radius: 0.5rem;
      border-top-right-radius: 0.5rem;

      & > div {
        display: flex;
        flex: 1 1 0%;
        align-items: center;
        height: 100%;
        padding: 2rem;
        background: linear-gradient(
          to right bottom,
          rgb(171, 97, 239),
          rgb(147, 51, 234)
        );

        div {
          width: 100%;
        }
      }
    }

    @media (min-width: 768px) {
      img {
        border-radius: 0.5rem;
        box-shadow: 0 0 transparent, 0 0 transparent,
          0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    }

    &__info {
      padding: 2rem;
      display: flex;
      flex-direction: column;
      flex: 1 1 0%;
      justify-content: space-between;
      border-color: rgba(229, 231, 235, 1);
    }

    &__heading {
      line-height: 1;
      font-weight: 500;
      font-size: 2.25rem;
      font-family: Plus Jakarta Display, Inter, sans-serif;
      margin-bottom: 1.5rem;
    }

    &__techStack {
      list-style: none;
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-top: 1.5rem;

      p {
        color: rgba(209, 213, 219, 1);
        letter-spacing: 0.1em;
        text-transform: uppercase;
        font-weight: 500;
        font-size: 0.75rem;
        line-height: 1rem;
        font-family: JetBrains Mono, Roboto Mono;
        padding: 0.25rem 0.5rem;
        border-color: rgba(229, 231, 235, 1);
        border-width: 1px;
        border-radius: 0.125rem;
        margin-bottom: 0.75rem;
        margin-right: 0.75rem;
        border: 0 solid;
      }
    }

    &__description {
      line-height: 1.8;
      color: rgba(209, 213, 219, 1);
      font-size: 0.875rem;
      margin-top: 1rem;
    }
  }
`;
export default function newCard({
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
    <StyledProjectCard bgColor='red'>
      <div className='project'>
        <div className='project__img'>
          <div>
            <div>
              <Image
                role='img'
                src={img}
                width={400}
                height={285}
                objectFit='contain'
                alt={`snapshot of ${title} website`}
              />
            </div>
          </div>
        </div>
        <div className='project__info'>
          <div>
            <h3 className='project__heading'> {title}</h3>
            <ul aria-label='tech stack' className='project__techStack'>
              {stack.map((item: string) => (
                <li key={`${id}-${item}`}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
            <p className='project__description'>{description}</p>
          </div>
        </div>
      </div>
    </StyledProjectCard>
  );
}
