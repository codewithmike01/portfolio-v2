import React from 'react';
import BgButton from './BgButton';
import { FiArrowUpRight } from 'react-icons/fi';
import { HeroContainer } from './styles/Hero.styles';
import { useNavigate } from 'react-router-dom';
import BorderButton from './BorderButton';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <HeroContainer>
      <div className="hero_wrapper">
        <h2>
          <span>HEY THERE 👋,</span>
          <span>I'M KANU MIKE CHIBUNDU</span>
        </h2>
        <p data-testid="description" className="description">
          A frontend software engineer with expertise in JavaScript, Typescript,
          Reactjs , NextJS, NodeJS, REST APIs etc, with an ambition to grow into
          a more senior role in the next years, Previous companies benefited
          from my abilities to follow clean code principles, translating design
          concepts into efficient and responsive code and building accessible
          and optimized web apps, thriving in both independent and collaborative
          team environments.
        </p>
      </div>

      <div className="btn-container">
        <BgButton
          text="See My Projects"
          width="10rem"
          icon={<FiArrowUpRight />}
          func={() => navigate('/projects')}
        />

        <a
          href={require('../assets/doc/01_Mike_kanu_(Front_end_software_engineer).pdf')}
          download={'01_Mike_kanu_(Front_end_software_engineer).pdf'}
        >
          <BorderButton
            text="Download my Resume"
            width="12rem"
            icon={<FiArrowUpRight />}
            func={() => {}}
          />
        </a>
      </div>
    </HeroContainer>
  );
};

export default Hero;
