import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  text-align: center;
  padding: 20px;
  background: #333;
  color: white;
  margin-top: 20px;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return <FooterWrapper> 2025 HomeDecor. All rights reserved.</FooterWrapper>;
};

export default Footer;