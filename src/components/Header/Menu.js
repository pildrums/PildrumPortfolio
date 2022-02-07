import React from 'react';
import styled from 'styled-components';

const Menu = () => {
  return (
    <HeaderMenu>
      <MainMenu>
        <li>Home</li>
        <li>About</li>
        <li>Project</li>
        <li>Contact</li>
      </MainMenu>
    </HeaderMenu>
  );
};

const HeaderMenu = styled.nav`
  display: flex;
  justify-content: center;
`;

const MainMenu = styled.ul`
  display: flex;
  li {
    margin: 0 10px;
    color: #333;
    font-size: 16px;
    font-weight: 700;
    text-align: center;
    user-select: none;
    cursor: pointer;
    transition: all 250ms linear;
    &:hover {
      color: #fff;
    }
  }
`;

export default Menu;