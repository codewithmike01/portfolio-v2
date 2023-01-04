import styled from 'styled-components';

export const HobbyContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .hobby_heading {
    .hobby_heading_wrap {
      display: flex;
      align-items: flex-end;
      gap: 10px;

      h4,
      .icon_hobby {
        font-size: 1.2rem;
      }
    }
  }

  .content_hobbies {
    line-height: 1.5rem;
  }
`;
