import styled from 'styled-components';

export const ProjectPageDetailContainer = styled.section`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 13rem;
  display: flex;
  flex-direction: column;
  gap: 32px;

  .project_details_container {
    width: 90%;
    height: 550px;
    margin: 0 auto;
    img {
      width: 100%;
      height: 100%;
      image-rendering: crisp-edges;
    }
  }

  .project_name {
    text-align: center;
  }

  .project_details_content {
    margin-top: 45px;
    display: flex;
    flex-direction: column;
    gap: 35px;
    .details_section {
      display: flex;
      flex-direction: column;
      gap: 15px;
    }
    .project_detail_skill {
      .project_details_tag {
        display: flex;
        gap: 15px;
        padding-left: 3rem;
        p {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 15px;
          background-color: var(--primary-bg);
          color: #fff;
          border-radius: 4px;
        }
      }
    }
  }
`;
