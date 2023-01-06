import React from 'react';
import { NotFoundContainer } from './styles/NotFound.styles';
import NotFoundImage from '../assets/images/not_found.jpg';
import BgButton from '../components/BgButton';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundContainer>
      <div className="not_found_image_container">
        <img src={NotFoundImage} alt="Not found page" />
      </div>
      <BgButton text="Back to home" func={() => navigate('/')} />
    </NotFoundContainer>
  );
};

export default NotFound;
