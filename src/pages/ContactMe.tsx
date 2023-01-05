import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import NavBar from '../components/NavBar';
import { ContactContainer } from './styles/ContactMe.styles';

const ContactMe = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };
  return (
    <>
      <NavBar />
      <ContactContainer>
        <h2>Contact Me</h2>

        <form className="form_contact" onSubmit={(e) => handleSubmit(e)}>
          <div className="input_field_container">
            <TextField
              label="Name"
              placeholder="John Deo"
              className="input_field"
              required
            />
          </div>
          <div className="input_field_container">
            <TextField
              label="Email"
              placeholder="Myemail@gamil.com"
              className="input_field"
              required
            />
          </div>
          <div className="input_field_container">
            <textarea
              placeholder="Type message..."
              className="textarea"
              required
            />
          </div>

          <div className="button_container">
            <Button variant="contained" type="submit">
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
