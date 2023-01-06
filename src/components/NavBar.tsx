import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { BiMenuAltRight } from 'react-icons/bi';
import { MdOutlineClose } from 'react-icons/md';
import { NavBarContainer } from './styles/NavBar.styles';
import Logo from '../assets/images/logo.svg';

const NavBar: React.FC = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const naviagte = useNavigate();

  const handleActiveLink = ({ isActive }: any): object => {
    return {
      color: isActive ? 'blue' : '',
    };
  };
  return (
    <NavBarContainer isMobileMenu={isMobileMenu}>
      <div className="navbar_wrapper">
        <div className="logo_wrapper" onClick={() => naviagte('/')}>
          <img src={Logo} alt="Logo" /> <h3>KMC</h3>
        </div>

        <div className="nav_links_container">
          <div className="nav_links">
            <NavLink to="/project" style={handleActiveLink}>
              Project
            </NavLink>
            <NavLink to="/blog" style={handleActiveLink}>
              Blog
            </NavLink>
            <NavLink to="/resume" style={handleActiveLink}>
              Resume
            </NavLink>
            <NavLink to="/contact" style={handleActiveLink}>
              Contact Me
            </NavLink>
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
