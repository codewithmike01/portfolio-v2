import styled from 'styled-components';

export const FooterContainer = styled.section`
  background-color: #000;
  width: 100%;
  padding: 27px 0 20px 0;

  .footer_wrapper {
    width: 90%;
    margin: 0 auto;
    color: #fff;
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    flex-wrap: wrap;
    .footer_social_links {
      display: flex;
      gap: 1rem;

      a {
        color: #fff;
        font-size: 1.2rem;
      }
    }
  }
`;
