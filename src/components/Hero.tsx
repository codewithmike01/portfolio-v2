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
        <p data-testid="description" className="description">
          A dynamic mid-level frontend developer with expertise in HTML, CSS,
          JavaScript and Reactjs, focused on creating outstanding user
          experiences. With Demonstrated success in translating design concepts
          into efficient, responsive code and thriving in both independent and
          collaborative team environments.
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
