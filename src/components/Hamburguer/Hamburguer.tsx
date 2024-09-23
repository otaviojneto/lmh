import React from 'react';
import { ColorProps, Menu } from './styles';

export type HamburguerProps = ColorProps & {
  onClick?: () => void;
};

const Hamburguer: React.FC<HamburguerProps> = ({
  color,
  onClick,
  isOpen,
}) => {
  return (
    <>
      <Menu color={color} onClick={onClick} isOpen={isOpen}>
        <span />
      </Menu>
    </>
  );
};

export default Hamburguer;
