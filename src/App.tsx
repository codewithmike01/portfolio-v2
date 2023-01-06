import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import ContactMe from './pages/ContactMe';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ProjectPage from './pages/ProjectPage';
import ResumePage from './pages/ResumePage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactMe />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/project" element={<ProjectPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
