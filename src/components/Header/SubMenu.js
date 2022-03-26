import React, { useState } from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const SubMenu = () => {
  const [hover, setHover] = useState(0);
  const onMouseOver = () => setHover(1);
  const onMouseOut = () => setHover(0);
  return (
    <HeaderSubMenu>
      <a
        href="https://github.com/pildrums"
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
      >
        <FaGithub />
      </a>
      {hover ? (
        <Bubble>
          <p>Github</p>
        </Bubble>
      ) : (
        ''
      )}
    </HeaderSubMenu>
  );
};

const HeaderSubMenu = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  a {
    font-size: 32px;
    color: #707070;
    transition: all 0.3s ease;
    cursor: pointer;
    &:hover {
      color: #333;
    }
  }
`;

const Bubble = styled.div`
  padding: 8px 16px;
  background: #fff;
  border-radius: 15px;
  position: absolute;
  top: 40px;
  left: -25px;
  user-select: none;
  transition: all 0.3s ease-in-out;
`;

export default SubMenu;
