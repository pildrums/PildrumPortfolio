import React from 'react';
import styled from 'styled-components';
import Content from '../Content';

const Project = () => {
  return (
    <Content>
      <ProjectContainer>
        <h2>Project</h2>
      </ProjectContainer>
    </Content>
  );
};

const ProjectContainer = styled.div`
  width: 1320px;
  height: 820px;
  background: #aaf;
`;

export default Project;