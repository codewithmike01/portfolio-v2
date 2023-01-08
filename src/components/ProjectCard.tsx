import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import BorderButton from './BorderButton';
import { ProjectCardContainer } from './styles/ProjectCard.styles';

interface ProjectCardInterface {
  id: number;
  title: string;
  stack: string[];
  description: string;
  viewLink: string;
  image: string;
}

const ProjectCard: React.FC<ProjectCardInterface> = ({
  id,
  title,
  stack,
  description,
  viewLink,
  image,
}) => {
  return (
    <ProjectCardContainer>
      <div className="project_image_stack_container">
        <div className="project_image_container">
          <img src={image} alt="Apply for me project" />
        </div>

        <div className="project_title_stack_container">
          <h3>{title}</h3>
          <div className="stack_container">
            <p className="stack_heading">Stack:</p>
            <div className="stack_tag_container">
              {stack.map((val) => (
                <p className="stack_tag">{val}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="description_action_button">
        <p>
          Apply for me is a project aim to help, IT professionals seeking for
          jobs, to be more productive while doing a job search...
        </p>

        <div className="project_button_container">
          <a href="nope" target="_blank">
            View <FiArrowUpRight />
          </a>

          <BorderButton text="Usecase" icon={<FiArrowUpRight />} width="5rem" />
        </div>
      </div>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
