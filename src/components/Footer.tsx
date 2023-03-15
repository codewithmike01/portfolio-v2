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
          <a href="https://github.com/Ginohmk" target="_blank" rel="noreferrer">
            <AiFillGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/mike-kanu-dev/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
          <a
            href="https://twitter.com/michotall95"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillTwitterSquare />
          </a>
          <a
            href="https://web.facebook.com/mike.kanu/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillFacebook />
          </a>
          <a
            href="https://www.instagram.com/savy_kanu_mike/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram />
          </a>
        </div>

        <div>Powered by Royal Code Mate</div>
      </div>
    </FooterContainer>
  );
};

export default Footer;
