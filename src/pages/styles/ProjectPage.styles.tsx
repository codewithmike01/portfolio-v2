import styled from 'styled-components';

export const ProjectPageContainer = styled.section`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 10rem;
  margin-bottom: 8rem;
  display: flex;
  flex-direction: column;
  gap: 45px;

  h2 {
    text-align: center;
    font-size: 2rem;
  }
  p {
    text-align: center;
  }

  /* Swither from Frontend to Fullstack */
  .project_spec_container {
    display: flex;
    align-items: center;
    gap: 2rem;
    align-self: center;
    .project_spec {
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 2px 4px 2px rgba(23, 74, 255, 0.25);
      border-radius: 8px;
      padding: 10px;
      width: 220px;
      height: 40px;

      p {
        font-size: 1.2rem;
      }
    }
    .bg {
      background-color: var(--primary-bg);
      color: #fff;
    }
  }

  .project_card_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-row-gap: 2.3rem;
    grid-column-gap: 1.5rem;
  }

  @media screen and (max-width: 1045px) {
    .project_card_container {
      grid-template-columns: 1fr;
      grid-row-gap: 3rem;
    }
  }
`;
