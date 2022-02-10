import React from 'react';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeWrapper>
      <HomeContainer>
        <h2>Home</h2>
      </HomeContainer>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.section`
  width: 100%;
  padding: 0 1.25rem;
  /* background: coral; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeContainer = styled.div`
  width: 1320px;
  height: 820px;
  background: #faf;
`;

export default Home;