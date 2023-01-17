import styled from 'styled-components';

export const ResumePageContainer = styled.section`
  width: 90%;
  max-width: 1440px;
  margin: 0 auto;
  padding-top: 4rem;
  position: relative;

  .resume_header_container {
    position: fixed;
    top: 30px;
    right: 30px;
    left: 30px;
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
      }
    }
  }
`;
