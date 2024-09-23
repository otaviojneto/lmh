import styled from 'styled-components';
import theme from '../../styles/colors';
import { background } from '../../assets';

export const Container = styled.div`
  height: 400px;
  overflow: hidden;
  top: -1px;
  width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  background-attachment: fixed;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 400px;
  justify-content: center;
  position: relative;

  &::before {
    background-color: ${theme.colors.white};
    content: '';
    height: 100%;
    opacity: 0.2;
    position: absolute;
    width: 100%;
  }

  &::after {
    background-color: ${theme.colors.bgColor};
    bottom: -36px;
    content: '';
    height: 86px;
    left: 0px;
    transform: rotate(-3deg);
    transition: ease-in-out 0.4s;
    position: absolute;
    width: 101%;
    overflow: hidden;
  }

  img {
    height: 350px;
    z-index: 1;
  }

  @media (min-width: 1400px) {
    &::after {
      transform: rotate(-2deg);
    }
  }
`;
