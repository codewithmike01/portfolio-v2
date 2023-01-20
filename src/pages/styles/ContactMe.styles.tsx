import styled from 'styled-components';

export const ContactContainer = styled.section`
  margin-top: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;

  .form_contact {
    width: 80%;
    max-width: 1440px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 45px;
    .input_field_container {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;

      .input_field {
        width: 100%;
        max-width: 750px;
      }

      label:active {
        color: var(--primary-bg);
      }

      .textarea {
        width: 100%;
        max-width: 730px;
        height: 150px;
        padding: 10px;
        border: 1px solid #bebdbd;
        border-radius: 4px;
        font-size: 1rem;

        &:focus {
          outline: 1px solid var(--primary-bg);
        }
      }
    }

    .button_container {
      width: 80%;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        width: 280px;
        height: 100%;
        background-color: var(--primary-bg);
        font-size: 1.2rem;
        border-radius: 8px;

        &:focus {
          outline: 2px solid var(--primary-bg);
        }
      }
    }
  }
`;
