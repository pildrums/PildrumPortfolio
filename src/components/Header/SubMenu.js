import React from 'react';
import styled from 'styled-components';
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";

const SubMenu = () => {
  return (
    <HeaderSubMenu>
      <li>
        <FaGithub />
      </li>
      <li>
        <MdWeb />
      </li>
    </HeaderSubMenu>
  );
};

const HeaderSubMenu = styled.ul`
  display: flex;
  align-items: center;
  li {
    font-size: 32px;
    color: #707070;
    transition: all 0.3s ease;
    cursor: pointer;
    &:last-child {
      margin-left: 1rem;
    }
    &:hover {
      color: #333;
    }
  }
`;

export default SubMenu;