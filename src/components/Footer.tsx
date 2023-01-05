import React from 'react';
import { FooterContainer } from './styles/Footer.styles';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <FooterContainer>
      <div className="footer_wrapper">
        <div className="footer_social_links">
          <a href="liked" target="_blank">
            <AiFillGithub />
          </a>
          <a href="liked" target="_blank">
            <AiFillLinkedin />
          </a>
          <a href="liked" target="_blank">
            <AiFillTwitterSquare />
          </a>
          <a href="liked" target="_blank">
            <AiFillFacebook />
          </a>
          <a href="liked" target="_blank">
            <AiFillInstagram />
          </a>
        </div>

        <div>Powered by Coded Stack</div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
