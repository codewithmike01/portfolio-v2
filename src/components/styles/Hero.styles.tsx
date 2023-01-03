import styled from 'styled-components';

export const HeroContainer = styled.section`
  align-self: center;
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  .hero_wrapper {
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    p {
      align-self: center;
      max-width: 467px;
      line-height: 1.5rem;
      word-spacing: 1px;
    }
  }
`;
