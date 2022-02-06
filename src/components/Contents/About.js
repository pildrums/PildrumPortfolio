import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const About = () => {
  return (
    <Content>
      <AboutContainer>
        <h2>About</h2>
      </AboutContainer>
    </Content>
  );
};

const AboutContainer = styled.div`
  width: 1320px;
  height: 820px;
  background: #ffa;
`;

export default About;