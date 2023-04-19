import React from 'react';
import { Route, Routes } from 'react-router-dom';
import BlogPage from './pages/BlogPage';
import ContactMe from './pages/ContactMe';
import HomePage from './pages/HomePage';
import NotFound from './pages/NotFound';
import ProjectDetailPage from './pages/ProjectDetailPage';
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
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/projects/:id" element={<ProjectDetailPage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
