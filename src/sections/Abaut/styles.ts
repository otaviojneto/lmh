import styled from 'styled-components';
import theme from '../../styles/colors';

export const Container = styled.div`
  background-color: ${theme.colors.grey1};
  margin-top: 80px;
  padding: 70px 10%;
  position: relative;
  text-align: center;
  overflow: hidden;

  &::before {
    background-color: ${theme.colors.bgColor};
    content: '';
    height: 60px;
    left: 0px;
    top: -32px;
    transform: rotate(2deg);
    transition: ease-in-out 0.4s;
    position: absolute;
    width: 101%;
  }

  h1 {
    margin-bottom: 20px;
  }

  p {
    padding: 10px 20px;
  }

  @media (min-width: 1400px) {
    &::before {
      height: 74px;
      top: -34px;
    }
  }
`;
