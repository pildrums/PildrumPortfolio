import React from 'react';
import ReactTypingEffect from 'react-typing-effect';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeWrapper>
      <HomeContainer>
        <Typing
          text={['안녕하세요!', '프론트엔드 개발자 김필진입니다.']}
          eraseSpeed={100}
          eraseDelay={600}
        />
      </HomeContainer>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.section`
  width: 100%;
  padding: 0 1.25rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HomeContainer = styled.div`
  width: 1320px;
  height: 820px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Typing = styled(ReactTypingEffect)`
  font-size: 40px;
`;

export default Home;
