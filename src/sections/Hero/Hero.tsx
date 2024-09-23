import React from 'react';
import { brand } from '../../assets';
import { Container, Content } from './styles';

const Hero: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={brand} alt="" />
      </Content>
    </Container>
  );
};

export default Hero;
