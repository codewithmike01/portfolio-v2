import React from 'react';
import { SkillsCardContainer } from './styles/SkillsCard.styles';

interface SkillInterface {
  id: number;
  skill: string;
  image: string;
}

const SkillCard: React.FC<SkillInterface> = ({ id, skill, image }) => {
  return (
    <SkillsCardContainer key={id}>
      <div className="image_container">
        <img src={`${image}`} alt={`${skill}`} />
      </div>
      <p>{`${skill}`.toUpperCase()}</p>
    </SkillsCardContainer>
  );
};

export default SkillCard;
