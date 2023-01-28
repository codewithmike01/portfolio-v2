import React from 'react';
import { TestimonyContainer } from './styles/TestimonyCard.style';

interface TestimonyInterface {
  id: number;
  name: string;
  image: string;
  icon: React.ReactElement;
  testify: string;
  link: string;
  profession: string;
}
const TestimonyCard: React.FC<TestimonyInterface> = ({
  id,
  name,
  image,
  icon,
  testify,
  link,
  profession,
}) => {
  return (
    <TestimonyContainer key={id}>
      <div className="testimony_card_image">
        <img src={image} alt="profile" />
      </div>
      <p className="card_owner">{name}</p>
      <a
        href={`${link}`}
        target="_blank"
        rel="noreferrer"
        className="card_profession"
      >
        <p>{profession}</p>

        {icon}
      </a>

      <p className="card_text">{testify}</p>
    </TestimonyContainer>
  );
};

export default TestimonyCard;
