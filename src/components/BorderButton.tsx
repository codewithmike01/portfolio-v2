import React from 'react';
import { BorderContainer } from './styles/Boarder.styles';

interface BorderInterface {
  width?: string;
  text: string;
  icon?: React.ReactElement;
  func?: Function;
}

const BorderButton: React.FC<BorderInterface> = ({
  width,
  text,
  icon,
  func,
}) => {
  return (
    <BorderContainer width={width} onClick={() => (func ? func() : {})}>
      {text} {icon}
    </BorderContainer>
  );
};

export default BorderButton;
