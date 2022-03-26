import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <h1>Contact</h1>
        <FooterItem>
          <MdEmail />
          <a href='mailto:pj9211@naver.com'>pj9211@naver.com</a>
        </FooterItem>
        <FooterItem>
          <FaPhoneAlt />
          <p>010.4721.6470</p>
        </FooterItem>
      </FooterContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  height: 400px;
  background: #180804;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1.25rem;
`;

const FooterContainer = styled.div`
  width: 1320px;
  height: inherit;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    color: #fff;
    margin-bottom: 40px;
  }
`;

const FooterItem = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 8px;
  svg {
    font-size: 20px;
    color: #fff;
  }
  a {
    margin-left: 8px;
    font-size: 20px;
    color: #fff;
  }
  p {
    margin-left: 8px;
    font-size: 20px;
    color: #fff;
  }
`;

export default Footer;
