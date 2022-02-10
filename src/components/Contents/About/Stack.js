import React from 'react';
import styled from 'styled-components';
import STACK from 'components/Contents/About/StackData';

const Stack = () => {
  return (
    <StackWrapper>
      <h1>Stack</h1>
      <StackContainer>
        {STACK.map(stack => (
          <StackItem key={stack.id}>
            <h2>{stack.text}</h2>
            {stack.component}
          </StackItem>
        ))}
      </StackContainer>
    </StackWrapper>
  );
};

const StackWrapper = styled.div`
  h1 {
    text-align: center;
    border-top: 1px solid #000;
    padding-top: 40px;
  }
`;

// PC = 1024px
// tablet = 800px
// mobile = 412px

const StackContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 20px 20px;
  justify-content: space-between;
  margin: 40px 0;
  @media all and (min-width: 515px) and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  @media all and (max-width: 514px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;

const StackItem = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  background: #fff;
  margin: 16px 24px;
  border-radius: 16px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2);
  transition: all 250ms linear;
  cursor: pointer;
  @media all and (min-width: 320px) and (max-width: 800px) {
    width: 180px;
  }
  &:hover {
    box-shadow: none;
    background: #eee;
  }
  h2 {
    font-size: 18px;
    margin-bottom: 16px;
  }
  svg {
    font-size: 100px;
  }
`;

export default Stack;