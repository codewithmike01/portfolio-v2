import styled from 'styled-components';

export const HomePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 7rem;
  width: 100%;
  /* General  */
  h2 {
    text-align: center;
  }

  /* Others {Section} */
  .hobbie_section {
    background-color: #000;
    color: #fff;
    padding: 45px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    .grid_hobbies {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 3rem;
      width: 90%;
      margin: 0 auto;
    }
  }

  .skills_section {
    width: 100%;
    .skills_section_header {
      margin-top: -130px;
      background-color: var(--primary-bg);
      height: 100px;
      width: 100%;
      padding: 31px 0 25px 0;
      color: #fff;
    }

    .grid_skills_container {
      background-color: #fff;
      border: 1px solid rgba(0, 0, 0, 0.1);
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 8px;
      width: 70%;
      margin: 0 auto;
      margin-top: -57px;
      padding: 30px 20px;
      color: var(--primary-text);
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 3rem;

      .skill_mail_to {
        text-decoration: none;
      }

      .grid_skills {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
        grid-row-gap: 2rem;
        grid-column-gap: 2rem;
      }
    }
  }

  .testimony_section {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 64px;

    .testimony_container {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
      grid-gap: 1.3rem;
      grid-row-gap: 3rem;
    }

    .react-multiple-carousel__arrow--left,
    .react-multiple-carousel__arrow--right {
      background: rgba(23, 74, 255, 0.8);
      z-index: 2;
    }
    .react-multiple-carousel__arrow--right {
      right: 0;
    }

    .react-multiple-carousel__arrow--left {
      left: 0;
    }

    .react-multi-carousel-track {
      padding: 35px 0;
    }
  }

  @media screen and (max-width: 375px) {
    .skills_section {
      .grid_skills_container {
        width: 80%;
      }
    }
  }
`;
