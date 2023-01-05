import styled from 'styled-components';

export const TestimonyContainer = styled.section`
  width: 325px;
  height: 308px;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px 10px 0 10px;

  .testimony_card_image {
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      image-rendering: crisp-edges;
      object-fit: cover;
      object-position: center center;
    }
  }

  .card_profession {
    display: flex;
    align-items: center;
    gap: 5px;

    a {
      text-decoration: none;
      color: #000;
      svg {
        font-size: 1.2rem;
      }
    }
  }

  .card_text {
    font-weight: 500;
    font-size: 1rem;
    font-weight: 500;
    text-align: center;
  }

  @media screen and (max-width: 800px) {
    width: 75%;
    margin: 0 auto;
  }
`;
