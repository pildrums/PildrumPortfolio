import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';
import { PROJECT } from "components/Contents/Project/ProjectData";

const ProjectList = () => {
  return (
    <>
      <Title>Project</Title>
      <ProjectListWrapper>
        {PROJECT.map(item => (
          <ProjectItem key={item.id}>
            <ProjectImage>
              <img src={item.img} alt="" />
              <ButtonWrapper className='active'>
                <Button color="#afa" hover="#aaf" onClick={() => window.open(item.git)}>Github</Button>
                <Button color="#ffa" hover="#faf" onClick={() => window.open(item.url)}>홈페이지</Button>
              </ButtonWrapper>
            </ProjectImage>
            <ItemTitle>{item.title}</ItemTitle>
            <ItemStack>{item.stack}</ItemStack>
          </ProjectItem>
        ))}
      </ProjectListWrapper>
    </>
  );
};

const Title = styled.h2`
  margin: 40px 0;
  align-self: center;
`;

const ProjectListWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px 20px;
  justify-content: space-between;
  @media all and (min-width: 320px) and (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const ProjectImage = styled.div`
  width: 300px;
  height: 200px;
  transition: all 200ms linear;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: inherit;
    height: inherit;
    position: absolute;
  }
  &:hover {
    box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.5);
    .active {
      opacity: 1;
      transition: all 200ms linear;
    }
  }
`;

const ItemTitle = styled.h2`
  margin: 8px 0;
`;

const ItemStack = styled.p`
  margin: 8px 0 16px 0;
`;

const ButtonWrapper = styled.div`
  display: flex;
  opacity: 0;
  position: absolute;
  a {
    margin: 0 8px;
  }
`;

export default ProjectList;
