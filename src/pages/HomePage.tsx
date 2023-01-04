import React from 'react';
import Hero from '../components/Hero';
import HobbyCard from '../components/HobbyCard';
import NavBar from '../components/NavBar';
import QuoteCard from '../components/QuoteCard';
import { HomePageContainer } from './styles/HomePage.styles';
import { FiMusic } from 'react-icons/fi';
import { MdGamepad } from 'react-icons/md';
import { IoFastFood } from 'react-icons/io5';
import SkillCard from '../components/SkillCard';

const hobbies: {
  id: number;
  hobby: string;
  content: string;
  icon: React.ReactElement;
}[] = [
  {
    id: 1,
    hobby: 'Music',
    content: 'I Love listening to slow music instrumental like deep codify.',
    icon: <FiMusic />,
  },
  {
    id: 2,
    hobby: 'Cooking',
    content: 'Cooking is like my second nature, i can never go wrong with it.',
    icon: <IoFastFood />,
  },
  {
    id: 3,
    hobby: 'Games',
    content: 'I love playing indoor games like monopoly with friends.',
    icon: <MdGamepad />,
  },
];

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
        <h2>My Current Skills</h2>
        <SkillCard />
      </section>
    </HomePageContainer>
  );
};

export default HomePage;
