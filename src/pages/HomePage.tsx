import React from 'react';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import { HomePageContainer } from './styles/HomePage.styles';

const HomePage = () => {
  return (
    <HomePageContainer>
      <NavBar />
      <Hero />
    </HomePageContainer>
  );
};

export default HomePage;
