import React from 'react';
import styled from 'styled-components';

const Content = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  width: 100%;
  padding: 0 1.25rem;
  background: coral;
  display: flex;
  justify-content: center;
`;

export default Content;