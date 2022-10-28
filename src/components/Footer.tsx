import React from "react";
import styled from "@emotion/styled";
import { colorPalette } from "../styles/colorPalette";

const FooterStyle = styled.footer`
  padding: 24px 32px;
  position: fixed;
  bottom: 0;
  background-color: ${colorPalette.deepBlue};
  color: white;
  width: 100%;
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
`;

const Footer = () => {
  return <FooterStyle>Footer</FooterStyle>;
};

export default Footer;
