import React from 'react';
import styled from 'styled-components';
import Content from './Content';

const Home = () => {
  return (
    <Content>
      <HomeContainer>
        <h2>Home</h2>
      </HomeContainer>
    </Content>
  );
};

const HomeContainer = styled.div`
  width: 1320px;
  height: 820px;
  background: #faf;
`;

export default Home;