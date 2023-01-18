import styled from 'styled-components';
interface NavBarInterface {
  isMobileMenu: boolean;
}

export const NavBarContainer = styled.section<NavBarInterface>`
  background-color: #fff;
  position: fixed;
  height: 75px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 5;

  background-color: #fff;
  display: flex;
  flex-direction: column;

  .navbar_wrapper {
    background-color: #fff;
    position: inherit;
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 1.3125rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    align-self: center;

    .logo_wrapper {
      display: flex;
      align-items: center;
      gap: 8px;
      z-index: 6;
      cursor: pointer;

      h3 {
        font-size: 1.5rem;
      }
    }

    .nav_links_container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 70%;
      gap: 3rem;

      .nav_links {
        display: flex;
        gap: 2.625rem;
        a {
          text-decoration: none;
          color: #000000;
        }
      }

      .social_container {
        display: flex;
        gap: 1.645625rem;
        a {
          font-size: 1.2rem;
        }
      }

      /* General Nav Link Container */
      a {
        text-decoration: none;
        color: #000000;
      }
    }

    .mobile-menu {
      display: none;
      font-size: 2rem;
      cursor: pointer;
      z-index: 4;
    }
  }

  @media screen and (max-width: 775px) {
    .navbar_wrapper {
      width: 90%;
      z-index: 5;
      .mobile-menu {
        display: flex;
        align-self: center;
      }
      .nav_links_container {
        display: ${({ isMobileMenu }) => (isMobileMenu ? 'flex' : 'none')};
        position: absolute;
        top: 8rem;
        z-index: 3;
        flex-direction: column;
        width: 100%;

        .nav_links,
        .social_container {
          align-self: flex-start;
          flex-direction: column;
        }

        .social_container {
          flex-direction: row;
        }
      }
    }

    .blur_background {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      height: 100vh;
      width: 100%;
      /* z-index: 1; */
      background-color: #ffffff;
    }
  }
`;
