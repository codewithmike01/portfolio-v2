import styled from 'styled-components';

export const ProjectCardContainer = styled.div`
  padding: 15px 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  background: #ffffff;
  box-shadow: 0px 4px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;

  .project_image_stack_container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: flex-start;
    grid-column-gap: 10px;

    .project_image_container {
      border-radius: 4px;
      width: 274px;
      height: 200px;
      img {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px,
          rgba(0, 0, 0, 0.23) 0px 3px 6px;
        /* border: 1px solid rgba(23, 74, 255, 0.5); */
        width: 100%;
        height: 100%;
        image-rendering: crisp-edges;
      }
    }

    .project_title_stack_container {
      display: flex;
      flex-direction: column;
      gap: 5px;

      h3 {
        text-align: center;
        font-size: 1.4rem;
      }
      .stack_container {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 7px;

        .stack_heading {
          font-size: 1.2rem;
        }

        .stack_tag_container {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          gap: 7px;
          flex-wrap: wrap;

          .stack_tag {
            background: rgba(23, 74, 255, 0.7);
            color: #fff;
            border-radius: 6px;
            padding: 7px 12px;
            font-size: 0.8rem;
          }
        }
      }
    }
  }

  .description_action_button {
    display: flex;
    flex-direction: column;
    gap: 20px;
    position: relative;

    p {
      text-align: start;
      /*height: 65px;*/
    }
    .project_button_container {
      align-self: center;
      display: flex;
      gap: 30px;
      align-items: center;
      justify-content: center;
      width: 90%;
      margin: 0 auto;

      a {
        max-width: 6rem;
        width: 100%;
        margin: 0 auto;
        background-color: var(--primary-bg);
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        padding: 12px 24px;
        border-radius: 8px;
        border: 1px solid var(--primary-bg);
        cursor: pointer;
        text-decoration: none;

        svg {
          color: #fff;
        }
      }
    }
  }

  @media screen and (max-width: 1097px) {
    gap: 25px;
    .project_image_stack_container {
      grid-template-columns: 1fr;
      grid-row-gap: 2rem;

      .project_image_container {
        width: 100%;
      }

      .project_title_stack_container {
        gap: 15px;
      }
    }
  }

  @media screen and (max-width: 1045px) {
    .project_image_stack_container {
      .project_image_container {
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 357px) {
    /* width: 270px;
    margin: 0 auto; */
    .description_action_button {
      .project_button_container {
        flex-direction: column;

        button {
          align-self: center;
        }
      }
    }
  }
`;
