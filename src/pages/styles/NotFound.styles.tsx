import styled from 'styled-components';

export const NotFoundContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  justify-content: center;
  height: 100vh;

  .not_found_image_container {
    width: 90%;
    max-width: 450px;
    img {
      width: 100%;
    }
  }
`;
