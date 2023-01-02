import styled from 'styled-components';

export const NavBarContainer = styled.section`
  .navbar_wrapper {
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
    padding-top: 2.3125rem;
    display: flex;
    justify-content: space-between;
    gap: 1rem;
    align-items: center;

    .logo_wrapper {
      display: flex;
      align-items: center;
      gap: 8px;

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
      }

      /* General Nav Link Container */
      a {
        text-decoration: none;
        color: #000000;
      }
    }
  }
`;
