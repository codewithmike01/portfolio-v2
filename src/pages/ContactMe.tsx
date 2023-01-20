import React from 'react';
import NavBar from '../components/NavBar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useForm } from '@formspree/react';

import 'react-toastify/dist/ReactToastify.css';
import { ContactContainer } from './styles/ContactMe.styles';
import BgButton from '../components/BgButton';
import { useNavigate } from 'react-router-dom';
import HelmetHead from '../components/HelmetHead';

const ContactMe = () => {
  const [state, handleSubmit] = useForm('xrgvglrd');
  const navigate = useNavigate();

  if (state.succeeded) {
    return (
      <>
        <HelmetHead
          title="Contact RC"
          description="Contact page for RC"
          keywords="Contact page, Best Contact page, Contact kanu mike, contact RC, contact royal coder"
        />
        <div
          className="email_res"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '2rem',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            width: '90%',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
          <p style={{ fontSize: '1.3rem' }}>
            Thanks for reaching out, I will respond shortly!
          </p>
          <BgButton
            text="Back to Home"
            func={() => navigate('/')}
            width="10rem"
          />
        </div>
      </>
    );
  }
  // const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
  //   event.preventDefault();
  // };
  return (
    <>
      <HelmetHead
        title="Contact RC"
        description="Contact page for RC"
        keywords="Contact page, Best Contact page, Contact kanu mike, contact RC, contact royal coder"
      />
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
          </div>
          <div className="input_field_container">
            <TextField
              label="Email"
              placeholder="Myemail@gamil.com"
              className="input_field"
              name="email"
              required
            />
          </div>
          <div className="input_field_container">
            <textarea
              placeholder="Type message..."
              className="textarea"
              name="message"
              required
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
