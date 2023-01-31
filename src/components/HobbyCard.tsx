import React, { ReactElement } from 'react';
import { HobbyContainer } from './styles/HobbyCard.styles';

interface HobbyInteface {
  id: number;
  hobby: string;
  content: string;
  icon: React.ReactElement;
}

const HobbyCard: React.FC<HobbyInteface> = ({
  id,
  hobby,
  content,
  icon,
}): ReactElement => {
  return (
    <HobbyContainer key={id} data-testid="hobby__main">
      <div className="hobby_heading">
        <div className="hobby_heading_wrap">
          <h4>{hobby}</h4>
          <p className="icon_hobby">{icon}</p>
        </div>
      </div>
      <p className="content_hobbies">{content}</p>
    </HobbyContainer>
  );
};

export default HobbyCard;
