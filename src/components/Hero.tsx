import React from 'react';
import BgButton from './BgButton';
import { FiArrowUpRight } from 'react-icons/fi';
import { HeroContainer } from './styles/Hero.styles';
import { MdOutlineDownloading } from 'react-icons/md';
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
          A frontend software engineer with expertise in JavaScript, TypeScript,
          React.js, Next.js, Node.js, REST APIs, etc., with an ambition to grow
          into a more senior role in the next few years. Previous companies have
          benefited from my abilities to follow clean code principles, translate
          design concepts into efficient and responsive code, and build
          accessible and optimized web apps. I thrive in both independent and
          collaborative team environments.
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
          href={require('../assets/doc/01kanuMikeResume.docx')}
          download={'01kanuMikeResume.docx'}
        >
          <BorderButton
            text="Download my Resume"
            width="12rem"
            icon={<MdOutlineDownloading />}
            func={() => {}}
          />
        </a>
      </div>
    </HeroContainer>
  );
};

export default Hero;
