import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import ProjectCard from '../components/ProjectCard';
import { ProjectPageContainer } from './styles/ProjectPage.styles';
import { ProjectData } from './services/ProjectPage.service';
import Footer from '../components/Footer';
import HelmetHead from '../components/HelmetHead';
import { scrollToTop } from '../utils/scrollToTop';

const ProjectPage = () => {
  // const [projectSpec, setProjectSpec] = useState('frontend');

  // On render scroll to top
  useEffect(() => {
    scrollToTop();
  }, []);

  return (
    <>
      <HelmetHead
        title="Projects"
        description="This is project page of kanu mike chibundu Royal coder"
        keywords="E-commerce Royal coder, Projects by Kanu mike Chibundu"
      />
      <NavBar />
      <ProjectPageContainer>
        <h2>My Projects</h2>

       

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
      <Footer />
    </>
  );
};

export default ProjectPage;
