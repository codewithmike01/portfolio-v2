import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Hero from '../components/Hero';
import HobbyCard from '../components/HobbyCard';
import NavBar from '../components/NavBar';
import QuoteCard from '../components/QuoteCard';
import { HomePageContainer } from './styles/HomePage.styles';
import SkillCard from '../components/SkillCard';
import { hobbies, skills, testimonyData } from './services/HomePageServices';
import BgButton from '../components/BgButton';
import TestimonyCard from '../components/TestimonyCard';
import Footer from '../components/Footer';

const HomePage = () => {
  // Carousel Responsiveness
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 800 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 800, min: 0 },
      items: 1,
    },
  };
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

      <section className="testimony_section">
        <h2>TESTIMONIES</h2>
        <Carousel responsive={responsive} infinite={true}>
          {testimonyData.map(
            ({ id, name, image, icon, link, profession, testify }) => (
              <TestimonyCard
                id={id}
                name={name}
                image={image}
                icon={icon}
                link={link}
                profession={profession}
                testify={testify}
              />
            )
          )}
        </Carousel>
      </section>

      <Footer />
    </HomePageContainer>
  );
};

export default HomePage;
