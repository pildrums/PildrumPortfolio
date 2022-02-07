import React from 'react';
import styled from 'styled-components';
import Content from '../Content';
import Timeline from "./Timeline";
import Stack from "./Stack";

const About = () => {
  return (
    <Content>
      <AboutContainer>
        <Timeline />
        <Stack />
      </AboutContainer>
    </Content>
  );
};

const AboutContainer = styled.div`
  width: 1320px;
  background: #ffa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export default About;