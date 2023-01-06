import React from 'react';
import NavBar from '../components/NavBar';
import { ProjectPageContainer } from './styles/ProjectPage.styles';

const ProjectPage = () => {
  return (
    <>
      <NavBar />
      <ProjectPageContainer>
        <p>ProjectPage</p>
      </ProjectPageContainer>
    </>
  );
};

export default ProjectPage;
