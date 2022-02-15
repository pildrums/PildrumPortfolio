import React from 'react';
import styled from 'styled-components';
import ProjectList from "components/Contents/Project/ProjectList";

const Project = () => {
  return (
    <ProjectWrapper>
      <ProjectContainer>
        <ProjectList />
      </ProjectContainer>
    </ProjectWrapper>
  );
};

const ProjectWrapper = styled.section`
  width: 100%;
  padding: 0 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ProjectContainer = styled.div`
  width: 1320px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background: #aaf; */
  padding: 40px 0;
`;

export default Project;