import React from 'react';
import styled from 'styled-components';
import { Project } from '../common';
import { Layout } from '../layout';
import ProjectsData, {
  projectDataType,
} from '../../services/data-svc/projects-data';

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  height: max-content;
  justify-content: center;
  margin: 0;
  max-width: 120rem;
  gap: 2em;
`;

export default function Projects() {
  return (
    <Layout title='PROJECTS' id='Projects'>
      <StyledContainer>
        {ProjectsData.map((project: projectDataType) => (
          <Project key={project.id} {...project}></Project>
        ))}
      </StyledContainer>
      {/* <StyledWrapper>
        <div className='container'>
          <div className='card'>
            <Project>
              <p>hey</p>
            </Project>
          </div>
        </div>
      </StyledWrapper> */}
    </Layout>
  );
}
