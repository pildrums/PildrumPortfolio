import React from 'react';
import styled from 'styled-components';

const Button = ({children, href, color, hover, onClick}) => {
  return (
    <StyledButton href={href} color={color} hover={hover} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

// props로 색상 전달
const StyledButton = styled.button`
  width: 100px;
  background: ${props => props.color};
  padding: 16px 0;
  text-align: center;
  transition: all 200ms ease-in-out;
  font-size: 16px;
  font-weight: 700;
  border: none;
  margin: 0 8px;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background: ${props => props.hover};
  }
`;

export default Button;