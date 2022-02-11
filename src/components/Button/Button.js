import React from 'react';
import styled from 'styled-components';

const Button = ({children, href}) => {
  return (
    <StyledButton href={href}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.a`
  background: #ccc;
  padding: 8px 16px;
  &:hover {
    background: #333;
  }
`;

export default Button;