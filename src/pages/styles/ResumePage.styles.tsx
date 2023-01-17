import styled from 'styled-components';

export const ResumePageContainer = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 0 4rem 0;
  position: relative;
  display: flex;
  flex-direction: column;

  gap: 60px;

  .resume_header_container {
    background-color: #fff;
    padding: 1rem 0;
    width: 100%;
    position: fixed;
    z-index: 2;
    top: 0px;
    .resume_header_wrapper {
      width: 90%;
      max-width: 1440px;
      margin: 0 auto;

      display: flex;
      justify-content: space-between;
      align-items: center;

      .download_wraper {
        a {
          display: flex;
          align-items: center;
          align-items: center;
          gap: 10px;
          color: var(--primary-bg);
          text-decoration: underline 2px var(--primary-bg);
          font-size: 1.3rem;

          svg {
            animation: Bounce 1s ease-in-out infinite;

            @keyframes Bounce {
              0% {
                transform: scale(1);
              }

              50% {
                transform: scale(1.1);
              }

              100% {
                transform: scale(1.2);
              }
            }
          }
        }
      }
    }
  }

  .resume_main {
    width: 90%;
    max-width: 1440px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;

    gap: 60px;
    .resume_content_wrapper {
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-top: 9rem;

      .resume_content_header {
        display: flex;
        flex-direction: column;
        gap: 15px;
        .profile_name,
        .profession_name {
          text-align: center;
        }

        .profile_name {
          font-weight: 600;
          font-size: 2rem;
          text-transform: uppercase;
        }

        .profession_name {
          color: var(--primary-bg);
        }
      }
    }
    .resume_details_container {
      display: flex;
      flex-direction: column;
      gap: 64px;

      .resume_details_content_container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        letter-spacing: 1.5px;
        .resume_details_head {
          font-weight: 600;
          opacity: 0.7;
        }

        /* Bullet and content */
        .resume_details_wrapper {
          display: flex;
          gap: 20px;

          .resume_rule {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            .circle {
              width: 25px;
              height: 25px;
              border-radius: 50%;
              background-color: var(--primary-bg);
            }

            .rectangle {
              margin-top: -10px;
              width: 5px;
              min-height: 150px;

              background-color: var(--primary-bg);
            }
          }
          .resume_details_wrapper_content {
            display: flex;
            flex-direction: column;
            gap: 20px;
            .resume_details_head_inner {
              font-weight: 600;
              opacity: 0.9;
            }

            .date {
              opacity: 0.6;
            }

            .course {
              color: var(--primary-bg);
              font-weight: 700;
              margin-bottom: 5px;
            }
          }
        }
      }
    }

    .download_btn_mobile {
      display: none;
    }
  }

  .certificate_container {
    background-color: var(--primary-bg);
    color: #fff;
    padding: 1rem 0 2rem 0;
    width: 100%;

    h3 {
      letter-spacing: 1.5px;
    }

    .certificate_wrapper {
      width: 90%;
      max-width: 1440px;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .carousel_cert {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 550px;
        img {
          width: 100%;
          height: 100%;
          image-rendering: crisp-edges;
        }
      }
    }
  }

  @media screen and (max-width: 754px) {
    .resume_header_container {
      .resume_header_wrapper {
        .download_wraper {
          display: none;
        }
      }
    }

    .resume_main {
      .download_btn_mobile {
        display: block;
        .download_wraper {
          a {
            color: #fff;
            text-decoration: none;

            .btn_content {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 10px;
              text-align: center;
              width: 220px;
              background-color: var(--primary-bg);
              padding: 8px 12px;
              border-radius: 4px;
              cursor: pointer;
            }
          }
        }
      }

      .resume_details_container {
        .resume_details_content_container {
          /* Bullet and content */
          .resume_details_wrapper {
            .resume_rule {
              .rectangle {
                min-height: 180px;
              }
            }
          }
        }
      }
    }
    .certificate_container {
      display: none;
    }
  }
`;
