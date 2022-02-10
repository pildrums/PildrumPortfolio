import React from 'react';
import styled from 'styled-components';
import { PROJECT } from "components/Contents/Project/ProjectData";

const Project = () => {
  return (
    <ProjectWrapper>
      <ProjectContainer>
        <h2>Project</h2>
        <ProjectList>
          {PROJECT.map(item => (
            <ProjectItem key={item.id}>
              <h2>{item.title}</h2>
              <p>{item.stack}</p>
              <ButtonWrapper>
                {/* 추후 버튼 컴포넌트 제작 예정 */}
                <a href={item.git}>Github</a>
                <a href={item.url}>GoTo</a>
              </ButtonWrapper>
            </ProjectItem>
          ))}
        </ProjectList>
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
  background: #aaf;
`;

const ProjectList = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .ProjectItem {
    width: 400px;
    height: 200px;
    background: coral;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
  }
`;

const ProjectItem = styled.div`
    width: 400px;
    height: 200px;
    background: coral;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  a {
    margin: 0 8px;
  }
`;

export default Project;