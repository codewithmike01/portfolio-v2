import styled from 'styled-components';

export const ProjectPageDetailContainer = styled.section`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 10rem;
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding-bottom: 3rem;

  .project_details_container {
    width: 90%;

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
      .contact_me {
        a {
          color: var(--primary-bg);
          text-decoration: underline 2px var(--primary-bg);
          font-weight: 600;
          display: flex;
          align-items: center;
          flex-direction: row;
          gap: 1rem;
          text-decoration: none;

          svg {
            font-size: 1.5rem;
          }
        }
      }

      p {
        line-height: 1.7rem;
        word-spacing: 1.3px;
      }

      display: flex;
      flex-direction: column;
      gap: 15px;
      .sub_content,
      .project_details_tag {
        padding-left: 3rem;
      }
      .project_details_tag {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
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

      .list_features {
        display: flex;
        flex-direction: column;
        gap: 20px;
        .feature_list_item {
          display: flex;
          align-items: center;
          gap: 20px;
          svg {
            font-size: 1.5rem;
            color: var(--primary-bg);
            opacity: 0.8;
          }
        }
      }
    }
  }

  .project_details_btn_container {
    margin-top: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3rem;
    width: 70%;
    margin: 0 auto;
  }

  @media screen and (max-width: 675px) {
    .project_details_content {
      .project_detail_skill {
        .sub_content,
        .project_details_tag {
          padding-left: 1rem;
        }
      }
    }

    .project_details_btn_container {
      flex-direction: column;
      width: 100%;
    }
  }
`;
// hack3490#@#
