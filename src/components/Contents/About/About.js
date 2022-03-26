import React from 'react';
import styled from 'styled-components';
import Stack from "components/Contents/About/Stack";

const About = () => {
  return (
    <AboutWrapper>
      <AboutContainer>
        <Stack />
      </AboutContainer>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.section`
  width: 100%;
  padding: 0 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

const AboutContainer = styled.div`
  width: 1320px;
  border-radius: 20px;
  box-shadow: 6px 0px 6px 4px rgba(0, 0, 0, 0.2);
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export default About;