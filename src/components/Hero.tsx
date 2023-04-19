import React from 'react';
import BgButton from './BgButton';
import { FiArrowUpRight } from 'react-icons/fi';
import { HeroContainer } from './styles/Hero.styles';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroContainer>
      <div className="hero_wrapper">
        <h2>
          <span>HEY THERE 👋,</span>
          <span>I'M KANU MIKE CHIBUNDU</span>
        </h2>
        <p data-testid="description">
          A graduate of computer science, who has sold his soul to software
          development. I have over 2 years experience as a Front-end developer,
          in building scalable web solutions, by following development standards
          , patterns and principles.
        </p>
      </div>

      <BgButton
        text="See My Projects"
        width="10rem"
        icon={<FiArrowUpRight />}
        func={() => navigate('/projects')}
      />
    </HeroContainer>
  );
};

export default Hero;
