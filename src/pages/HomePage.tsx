import React, { useEffect } from 'react';
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
import { useNavigate } from 'react-router-dom';
import HelmetHead from '../components/HelmetHead';
import { scrollToTop } from '../utils/scrollToTop';

const HomePage = () => {
  const navigate = useNavigate();

  // On render scroll to top
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <HelmetHead
        title="RC - Home"
        description="This website is a porfolio website for Kanu Mike Chibundu aka RoyalCode, a programmer who has sold his soul to web development and is dedicaed to improve the system"
        keywords="Web developer, kanu mike chibundu, Mike, Royal Code"
      />
      <HomePageContainer>
        <NavBar />
        <Hero />
        <QuoteCard />
        <section className="hobbie_section">
          <h2>HOBBIES</h2>
          <div className="grid_hobbies">
            {hobbies.map(({ id, icon, hobby, content }) => (
              <HobbyCard
                id={id}
                icon={icon}
                hobby={hobby}
                content={content}
                key={id}
              />
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

            <BgButton
              text="Contact Me Now"
              width="10rem"
              func={() => navigate('/contact')}
            />
          </div>
        </section>

        <section className="testimony_section">
          <h2>TESTIMONIES</h2>
          <div className="testimony_container">
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
          </div>
        </section>

        <Footer />
      </HomePageContainer>
    </>
  );
};

export default HomePage;
