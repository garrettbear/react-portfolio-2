import React from "react";
// import { Link } from "react-router-dom";
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background: #1f1f1f;
  display: grid;
  height: 50px;
  text-align: center;
  align-items: center;
  p {
    color: #fff;
    font-size: 12px;
    font-family: "Helvetica Neue", "HelveticaNeue-Light", "Helvetica Neue Light", Helvetica, Arial, "Lucida Grande", sans-serif;
    font-weight: 200;
    letter-spacing: 1px;
  }
`;


const Footer = props => (
  <FooterWrapper>
    <p style={{ color: '#fff' }}>
      © 2018 GARRETT WHISTEN
    </p>
  </FooterWrapper>
);

export default Footer;
