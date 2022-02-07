import React from 'react';
import styled from 'styled-components';
import STACK from './StackData';

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

const StackContainer = styled.div`
  width: 800px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px 0;
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