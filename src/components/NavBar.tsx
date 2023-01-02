import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { NavBarContainer } from './styles/NavBar.styles';
import Logo from '../assets/images/logo.svg';

const NavBar = () => {
  return (
    <NavBarContainer>
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
            <a href="/github" target="_blank">
              {' '}
              <AiFillGithub />{' '}
            </a>

            <a href="/github" target="_blank">
              <AiFillLinkedin />
            </a>
          </div>
        </div>
      </div>
    </NavBarContainer>
  );
};

export default NavBar;
