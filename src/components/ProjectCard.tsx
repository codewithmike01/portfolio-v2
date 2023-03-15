import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  return (
    <ProjectCardContainer>
      <div className="project_image_stack_container">
        <div className="project_image_container">
          <img src={image} alt={title} />
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
        <p>{description}</p>

        <div className="project_button_container">
          <a href={viewLink} target="_blank" rel="noreferrer">
            View <FiArrowUpRight />
          </a>

          <BorderButton
            text="Usecase"
            icon={<FiArrowUpRight />}
            width="6rem"
            func={() => navigate(`/project/${id}`)}
          />
        </div>
      </div>
    </ProjectCardContainer>
  );
};

export default ProjectCard;
