import React from 'react';
import styled from 'styled-components';

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <h2>Contact</h2>
      </FooterContainer>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  width: 100%;
  height: 820px;
  background: #180804;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FooterContainer = styled.div`
  width: 1320px;
  height: inherit;
  background: #afa;
`;

export default Footer;