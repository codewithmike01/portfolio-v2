import React from 'react';
import { ProjectPageDetailContainer } from './styles/ProjectPDetailPage.style';
import NavBar from '../components/NavBar';
import ProjectPicture from '../assets/images/test_project1.png';

const ProjectDetailPage = () => {
  return (
    <>
      <NavBar />
      <ProjectPageDetailContainer>
        <div className="project_details_container">
          <img src={ProjectPicture} alt="product" />
        </div>

        <h2 className="project_name">Apply For Me</h2>

        <section className="project_details_content ">
          <div className="project_detail_skill details_section">
            <h4>Tools used: </h4>
            <div className="project_details_tag">
              {['Reactjs', 'Typescript', 'Jest', 'Material Ui'].map((val) => (
                <p>{val}</p>
              ))}
            </div>
          </div>
        </section>
      </ProjectPageDetailContainer>
    </>
  );
};

export default ProjectDetailPage;
