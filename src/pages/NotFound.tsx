import React from 'react';
import { NotFoundContainer } from './styles/NotFound.styles';
import NotFoundImage from '../assets/images/not_found.jpg';
import BgButton from '../components/BgButton';
import { useNavigate } from 'react-router-dom';
import HelmetHead from '../components/HelmetHead';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <HelmetHead
        title="Not Found"
        description="This is a page for not found or broken url"
        keywords="Not found, Broken link, erro page"
      />
      <NotFoundContainer>
        <div className="not_found_image_container">
          <img src={NotFoundImage} alt="Not found page" />
        </div>
        <BgButton text="Back to home" func={() => navigate('/')} />
      </NotFoundContainer>
    </>
  );
};

export default NotFound;
