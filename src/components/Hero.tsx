import React from 'react';
import BgButton from './BgButton';
import { FiArrowUpRight } from 'react-icons/fi';
import { HeroContainer } from './styles/Hero.styles';

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero_wrapper">
        <h2>HEY, I'M KANU MIKE CHIBUNDU</h2>
        <p>
          A graduate of computer science, who has sold his soul to software
          development. I have over 2 years experience as a Front-end developer,
          in building scalable web solutions, by following development standards
          , patterns and principles.
        </p>
      </div>

      <BgButton
        text="See My Projects"
        width="13.4375rem"
        icon={<FiArrowUpRight />}
      />
    </HeroContainer>
  );
};

export default Hero;
