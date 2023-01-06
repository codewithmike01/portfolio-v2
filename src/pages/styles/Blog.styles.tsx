import styled from 'styled-components';

export const BlogContiainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-size: 1.5rem;
  text-align: center;
  width: 90%;
  margin: 0 auto;

  @media screen and (max-width: 575px) {
    font-size: 1.2rem;
  }
`;
