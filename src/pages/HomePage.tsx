import React from 'react';
import Hero from '../components/Hero';
import HobbyCard from '../components/HobbyCard';
import NavBar from '../components/NavBar';
import QuoteCard from '../components/QuoteCard';
import { HomePageContainer } from './styles/HomePage.styles';
import SkillCard from '../components/SkillCard';
import { hobbies, skills } from './services/HomePageServices';
import BgButton from '../components/BgButton';

// Skill Data

const HomePage = () => {
  return (
    <HomePageContainer>
      <NavBar />
      <Hero />
      <QuoteCard
        content="Having a bug free day, is like activating God mode."
        author="J Thomson"
      />
      <section className="hobbie_section">
        <h2>HOBBIES</h2>
        <div className="grid_hobbies">
          {hobbies.map(({ id, icon, hobby, content }) => (
            <HobbyCard id={id} icon={icon} hobby={hobby} content={content} />
          ))}
        </div>
      </section>

      <section className="skills_section">
        <h2 className="skills_section_header ">My Current Skills</h2>

        <div className="grid_skills_container">
          <div className="grid_skills">
            {skills.map(({ id, skill, image }) => (
              <SkillCard id={id} skill={skill} image={image} />
            ))}
          </div>

          <BgButton text="Contact Me Now" />
        </div>
      </section>
    </HomePageContainer>
  );
};

export default HomePage;
