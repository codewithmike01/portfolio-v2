import styled from 'styled-components';

export const HomePageContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 7.5rem;
  /* General  */
  h2 {
    text-align: center;
  }

  /* Others {Section} */
  .hobbie_section {
    background-color: #000;
    color: #fff;
    padding: 31px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    .grid_hobbies {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      gap: 3rem;
      width: 90%;
      margin: 0 auto;
    }
  }

  .skills_section {
    margin-top: -130px;
    background-color: var(--primary-bg);
    width: 100%;
    padding: 31px 0;
    color: #fff;
  }
`;
