import React from 'react';
import styled from 'styled-components';
import Timeline from "components/Contents/About/Timeline";
import Stack from "components/Contents/About/Stack";

const About = () => {
  return (
    <AboutWrapper>
      <AboutContainer>
        <Timeline />
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
  background: #ffa;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
`;

export default About;