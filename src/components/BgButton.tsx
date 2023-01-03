import React from 'react';
import { BgButtonContainer } from './styles/BgButton.styles';

interface BgButtonINterface {
  text: string;
  width?: string;
  icon?: React.ReactElement;
}

const BgButton: React.FC<BgButtonINterface> = ({ text, width, icon }) => {
  return (
    <BgButtonContainer width={width}>
      <p>{text}</p>
      {icon}
    </BgButtonContainer>
  );
};

export default BgButton;
