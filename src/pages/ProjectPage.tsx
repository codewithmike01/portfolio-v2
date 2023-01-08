import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import { ProjectPageContainer } from './styles/ProjectPage.styles';

const ProjectPage = () => {
  const [projectSpec, setProjectSpec] = useState('frontend');
  return (
    <>
      <NavBar />
      <ProjectPageContainer>
        <h2>My Projects</h2>

        <section className="project_spec_container">
          <div
            className={`project_spec ${projectSpec === 'frontend' ? 'bg' : ''}`}
            onClick={() => setProjectSpec('frontend')}
          >
            <p>Frontend</p>
          </div>

          <div
            className={`project_spec ${
              projectSpec === 'fullstack' ? 'bg' : ''
            }`}
            onClick={() => setProjectSpec('fullstack')}
          >
            <p>Fullstack</p>
          </div>
        </section>
      </ProjectPageContainer>
    </>
  );
};

export default ProjectPage;
