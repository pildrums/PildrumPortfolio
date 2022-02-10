import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'logo.svg';
import Menu from "./Menu";
import SubMenu from "./SubMenu";

const Header = () => {
  const [viewport, setViewport] = useState(window.innerWidth);
  const breakPoint = 820;
  useEffect(() => {
    return window.addEventListener("resize", () => setViewport(window.innerWidth));
  }, []);

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <MainLogo />
          {viewport > breakPoint && <Menu />}
          <SubMenu />
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
`;

const Space = styled.div`
  height: 160px;
`;

export default Header;