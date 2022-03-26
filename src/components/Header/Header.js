// import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as Logo } from 'logo.svg';
// import Menu from "components/Header/Menu";
import SubMenu from "components/Header/SubMenu";
import { MdOutlineVerticalAlignTop } from "react-icons/md";



const Header = () => {
  // const [viewport, setViewport] = useState(window.innerWidth);
  // const breakPoint = 820;
  // useEffect(() => {
  //   return window.addEventListener("resize", () => setViewport(window.innerWidth));
  // }, []);

  const onTop = () => {
    const top = document.documentElement.scrollTop || document.body.scrollTop;
    if (top > 0) {
      window.requestAnimationFrame(onTop);
      window.scrollTo(0, top - top / 10);
    }
  };

  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <MainLogo />
          {/* {viewport > breakPoint && <Menu />} */}
          <SubMenu />
        </HeaderContainer>
      </HeaderWrapper>
      <Space />
      <TopButton onClick={onTop}>
        <MdOutlineVerticalAlignTop />
      </TopButton>
    </>
  );
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 160px;
  background: #e0b17e;
  display: flex;
  justify-content: center;
  padding: 0 1.25rem;
  position: fixed;
  top: 0;
  z-index: 9999;
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

const TopButton = styled.div`
  width: 100px;
  height: 100px;
  background: #e0b17e;
  position: fixed;
  bottom: 40px;
  right: 40px;
  cursor: pointer;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, 0.4);
  svg {
    transition: all 0.1s ease-in;
    font-size: 40px;
    color: #707070;
  }
  &:hover {
    svg {
      color: #000;
    }
  }
`;

export default Header;