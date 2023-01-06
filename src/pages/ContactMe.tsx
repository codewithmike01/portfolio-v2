import React from 'react';
import NavBar from '../components/NavBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useForm, ValidationError } from '@formspree/react';

import 'react-toastify/dist/ReactToastify.css';
import { ContactContainer } from './styles/ContactMe.styles';
import BgButton from '../components/BgButton';
import { useNavigate } from 'react-router-dom';

const ContactMe = () => {
  const [state, handleSubmit] = useForm('xrgvglrd');
  const navigate = useNavigate();

  if (state.succeeded) {
    return (
      <div
        className="email_res"
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100vh',
        }}
      >
        <p style={{ fontSize: '1.3rem' }}>
          Thanks for reaching out, I will respond shortly!
        </p>
        <BgButton text="Back to Home" func={() => navigate('/')} />
      </div>
    );
  }
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };
  return (
    <>
      <NavBar />

      <ContactContainer>
        <h2>Contact Me</h2>

        <form className="form_contact" onSubmit={handleSubmit}>
          <div className="input_field_container">
            <TextField
              label="Name"
              placeholder="John Deo"
              className="input_field"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="input_field_container">
            <TextField
              label="Email"
              placeholder="Myemail@gamil.com"
              className="input_field"
              name="email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="input_field_container">
            <textarea
              placeholder="Type message..."
              className="textarea"
              name="message"
              required
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>

          <div className="button_container">
            <Button
              variant="contained"
              type="submit"
              disabled={state.submitting}
            >
              Send
            </Button>
          </div>
        </form>
      </ContactContainer>
    </>
  );
};

export default ContactMe;
// error
// id="outlined-error"
