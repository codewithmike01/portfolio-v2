import styled from 'styled-components';

export const QuoteContainer = styled.section`
  width: 70%;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.15);
  padding: 20px 5px 30px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 257px;
  position: relative;
  border-radius: 8px;

  p {
    text-align: center;
    font-size: 1.5rem;
    line-height: 40px;
    transform: scale(0);
    animation: fadeIn 0.75s ease-in-out forwards;

    @keyframes fadeIn {
      0% {
        transform: scale(0);
      }

      100% {
        transform: scale(1);
      }
    }
  }

  button {
    position: absolute;
    bottom: 10px;
    margin-right: 2rem;
  }

  .author_name {
    font-weight: bold;
    font-size: 1.4rem;
    font-style: italic;
  }

  @media screen and (max-width: 525px) {
    height: 427px;
    width: 90%;
    p {
      font-size: 1.4rem;
    }

    button {
      margin-right: 0;
    }
  }
`;
