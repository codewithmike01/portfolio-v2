import styled from 'styled-components';

export const HeroContainer = styled.section`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 10rem;

  .hero_wrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    p {
      align-self: center;
      max-width: 680px;
      line-height: 1.65rem;
      letter-spacing: 1.5px;
      word-spacing: 1px;
    }
  }

  button {
    align-self: center;
  }
`;
