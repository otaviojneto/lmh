import styled, { css } from 'styled-components';

export type ColorProps = {
  color?: string;
  isOpen?: boolean;
};

export const Menu = styled.button<ColorProps>`
  display: none;

  @media (max-width: 768px) {
    background-color: transparent;
    display: block;
    height: 24px;
    position: relative;
    width: 26px;

    &::before {
      top: 9px;
      width: 17px;
    }

    &::after {
      top: 18px;
      width: 10px;
    }

    &::before,
    &::after {
      background-color: ${({ color }) => color && color};
      content: '';
      height: 4px;
      right: 0;
      position: absolute;
      transition: ease-in-out 0.4s;

      ${({ isOpen }) =>
        isOpen &&
        css`
          width: 100%;
        `}
    }

    span {
      background-color: ${({ color }) => color && color};
      height: 4px;
      position: absolute;
      right: 0;
      top: 0px;
      width: 100%;
    }
  }
`;
