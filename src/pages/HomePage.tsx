import React from 'react';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import QuoteCard from '../components/QuoteCard';
import { HomePageContainer } from './styles/HomePage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <NavBar />
      <Hero />
      <QuoteCard />
    </HomePageContainer>
  );
};

export default HomePage;
