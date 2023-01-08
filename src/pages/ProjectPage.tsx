import React from 'react';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import { ProjectPageContainer } from './styles/ProjectPage.styles';
import { ProjectData } from './services/ProjectPage.service';

const ProjectPage = () => {
  // const [projectSpec, setProjectSpec] = useState('frontend');
  return (
    <>
      <NavBar />
      <ProjectPageContainer>
        <h2>My Projects</h2>

        <section className="project_spec_container">
          {/* Under Cosideration when becoame fullstack */}
          {/* <div
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
          </div> */}
        </section>

        <section className="project_card_container">
          {ProjectData.map(
            ({ id, title, description, viewLink, image, stack }) => (
              <ProjectCard
                id={id}
                title={title}
                viewLink={viewLink}
                image={image}
                stack={stack}
                description={description}
              />
            )
          )}
        </section>
      </ProjectPageContainer>
    </>
  );
};

export default ProjectPage;
