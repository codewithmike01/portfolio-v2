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

    .collabo {
      .collab_list {
        display: flex;
        align-items: center;
        gap: 20px;

        svg {
          font-size: 1.5rem;
          color: var(--primary-bg);
          opacity: 0.8;
        }

        .collab_link {
          color: var(--primary-bg);
          text-decoration: none;
          font-weight: 500;
        }
      }
    }
    .project_detail_skill {
      .contact_me {
        max-width: 12rem;
        width: 100%;
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
            font-size: 1.3rem;
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
          padding: 4px 15px;
          background-color: rgba(23, 74, 255, 0.8);
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
          p {
            width: 80%;
          }
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
    max-width: 950px;
    width: 90%;
    margin: 0 auto;

    .buy_coffee {
      cursor: pointer;
      width: 10rem;
      margin: 0 auto;
      background-color: transparent;
      color: var(--primary-text);
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 15px 24px;
      border-radius: 8px;
      border: 1px solid var(--primary-bg);
      text-decoration: none;
    }

    .visit_link_btn {
      max-width: 10rem;
      width: 100%;
      margin: 0 auto;
      background-color: var(--primary-bg);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      padding: 15px 24px;
      border-radius: 8px;
      border: 1px solid var(--primary-bg);
      cursor: pointer;
      text-decoration: none;
    }
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
