import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import ContactMe from './pages/ContactMe';
import HomePage from './pages/HomePage';
import ResumePage from './pages/ResumePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/resume" element={<ResumePage />} />
      </Routes>
    </div>
  );
}

export default App;
