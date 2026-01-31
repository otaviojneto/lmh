import React from 'react';

export type HamburguerProps = {
  color?: string;
  isOpen?: boolean;
  onClick?: () => void;
};

const Hamburguer: React.FC<HamburguerProps> = ({
  color = '#000',
  isOpen,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className="relative block h-6 w-[26px] bg-transparent md:hidden"
    >
      {/* linha de cima */}
      <span
        className="absolute right-0 top-0 h-1 w-full transition-all duration-500 ease-in-out"
        style={{ backgroundColor: color }}
      />

      {/* linha do meio (antes ::before) */}
      <span
        className={`absolute right-0 top-[9px] h-1 transition-all duration-500 ease-in-out ${
          isOpen ? 'w-full' : 'w-[17px]'
        }`}
        style={{ backgroundColor: color }}
      />

      {/* linha de baixo (antes ::after) */}
      <span
        className={`absolute right-0 top-[18px] h-1 transition-all duration-500 ease-in-out ${
          isOpen ? 'w-full' : 'w-[10px]'
        }`}
        style={{ backgroundColor: color }}
      />
    </button>
  );
};

export default Hamburguer;
