import React from 'react';
import { Layout } from '../layout';
import styled from 'styled-components';

import SkillsData from '../../services/data-svc/skills-data';

const StyledWrapper = styled.div`
  margin-top: 2em;
  max-width: 85%;
  margin: auto;

  @media (max-width: 992px) {
    max-width: 90%;
  }
`;
const StyledSkillContainer = styled.div`
  opacity: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;

  .skillItem {
    transform: none;
    opacity: 1;
    display: grid;
    margin: 0px 1em 1em;
    justify-items: center;
  }

  .skillItem .skillItem__icon {
    width: 3em;
  }

  svg {
    width: 48px;
    height: 48px;
  }

  .changeFill {
    fill: ${(props) => props.theme.iconColor};
    transition: fill 0.35s linear;
  }
`;

export default function Skills() {
  return (
    <Layout title='SKILLS'>
      <StyledWrapper>
        <StyledSkillContainer>
          {SkillsData.map((skill) => (
            <div className='skillItem' key={skill.id}>
              <div className='skillItem__icon'>
                <span>{skill.Icon}</span>
              </div>
              <p>{skill.label}</p>
            </div>
          ))}
        </StyledSkillContainer>
      </StyledWrapper>
    </Layout>
  );
}
