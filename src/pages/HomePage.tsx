import React from 'react';
import Hero from '../components/Hero';
import HobbyCard from '../components/HobbyCard';
import NavBar from '../components/NavBar';
import QuoteCard from '../components/QuoteCard';
import { HomePageContainer } from './styles/HomePage.styles';

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
        <HobbyCard />
      </section>
    </HomePageContainer>
  );
};

export default HomePage;
