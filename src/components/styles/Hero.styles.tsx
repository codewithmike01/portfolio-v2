import styled from 'styled-components';

export const HeroContainer = styled.section`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
  margin-top: 10rem;

  h2 {
    display: flex;
    flex-direction: column;
    gap: 10px;

    position: relative;
    left: 100%;

    animation: floatLeft 1s ease-in-out forwards;
    transition: left 1s ease-in-out;

    @keyframes floatLeft {
      0% {
        left: 100%;
      }

      100% {
        left: 0%;
      }
    }
  }

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
      transform: scale(0);

      animation: scaleIn 1s ease-in-out forwards;
      transition: transform 1s ease-in-out;

      @keyframes scaleIn {
        0% {
          transform: scale(0);
        }

        100% {
          transform: scale(1);
        }
      }
    }
  }

  button {
    align-self: center;
    position: relative;
    right: 100%;

    animation: floatRight 1s ease-in-out forwards;
    transition: right 1s ease-in-out;

    @keyframes floatRight {
      0% {
        right: 100%;
      }

      100% {
        right: 0%;
      }
    }
  }
`;
