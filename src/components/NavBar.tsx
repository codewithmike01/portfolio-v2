import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import { NavBarContainer } from './styles/NavBar.styles';
import Logo from '../assets/images/logo.svg';

const NavBar: React.FC = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  return (
    <NavBarContainer isMobileMenu={isMobileMenu}>
      <div className="navbar_wrapper">
        <div className="logo_wrapper">
          <img src={Logo} alt="Logo" /> <h3>KMC</h3>
        </div>

        <div className="nav_links_container">
          <div className="nav_links">
            <NavLink to="/project">Project</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/resume">Resume</NavLink>
            <NavLink to="/contact">Contact Me</NavLink>
          </div>

          <div className="social_container">
            <a
              href="https://github.com/Ginohmk"
              target="_blank"
              rel="noreferrer"
            >
              {' '}
              <AiFillGithub />{' '}
            </a>

            <a
              href="https://www.linkedin.com/in/mike-kanu-dev/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </div>
        </div>

        {/* Mobile Menu  */}
        {isMobileMenu ? (
          <MdOutlineClose
            className="mobile-menu"
            onClick={() => setIsMobileMenu(false)}
          />
        ) : (
          <BiMenuAltRight
            className="mobile-menu"
            onClick={() => setIsMobileMenu(true)}
          />
        )}
      </div>
      {/* Background Blur */}
      {isMobileMenu && <div className="blur_background"></div>}
    </NavBarContainer>
  );
};

export default NavBar;