import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'logo.svg';
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";


const Header = () => {
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <MainLogo />
          <HeaderMenu>
            <MainMenu>
              <li>Home</li>
              <li>About</li>
              <li>Project</li>
              <li>Contact</li>
            </MainMenu>
          </HeaderMenu>
          <HeaderSubMenu>
            <li><FaGithub /></li>
            <li><MdWeb /></li>
          </HeaderSubMenu>
        </HeaderContainer>
      </HeaderWrapper>
      <Space />
    </>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 160px;
  /* background: #33160e; */
  background: #e0b17e;
  display: flex;
  justify-content: center;
  padding: 0 1.25rem;
  position: fixed;
  top: 0;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.4);
`;

const HeaderContainer = styled.div`
  width: 1320px;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainLogo = styled(Logo)`
    width: 120px;
    margin-top: 8px;
`;

const HeaderMenu = styled.nav`
  display: flex;
  justify-content: center;
`;

const MainMenu = styled.ul`
  display: flex;
  li {
    margin: 0 20px;
    padding: 16px 40px;
    background: #fff;
    color: #333;
    font-size: 14px;
    font-weight: 700;
    text-align: center;
    box-shadow: 1px 8px 12px rgba(0, 0, 0, 0.3);
    user-select: none;
    cursor: pointer;
  }
`;

const HeaderSubMenu = styled.ul`
  display: flex;
  align-items: center;
  li {
    font-size: 32px;
    color: #707070;
    transition: all 0.3s ease;
    &:last-child {
      margin-left: 1rem;
    }
    &:hover {
      color: #333;
    }
  }
`;

const Space = styled.div`
  height: 160px;
`;

export default Header;