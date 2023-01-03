import React from 'react';
import { BgButtonContainer } from './styles/BgButton.styles';

interface BgButtonINterface {
  text: string;
  width?: string;
  icon?: React.ReactElement;
  func?: Function;
}

const BgButton: React.FC<BgButtonINterface> = ({ text, width, icon, func }) => {
  return (
    <BgButtonContainer width={width} onClick={() => (func ? func() : {})}>
      <p>{text}</p>
      {icon}
    </BgButtonContainer>
  );
};

export default BgButton;
