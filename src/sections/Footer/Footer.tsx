import React from 'react';
import { IcWhatsapp } from '../../icons';
import { Container, Whats } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <a href="https://www.google.com/maps/place/R.+Rio+Grande+do+Norte,+70+-+Pomp%C3%A9ia,+Santos+-+SP,+11065-460/@-23.964619,-46.3434245,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce03167b6c07b3:0x1c53c3a6d9721452!8m2!3d-23.9646239!4d-46.3412358">
          <h4>LOCALIZAÇÃO</h4>
          <p>Rua Rio Grande do Norte 70, Sala 4F.</p>
          <p>Santos,Sp</p>
        </a>
      </div>

      <div>
        <a href="https://api.whatsapp.com/send?phone=13988045152&text=Olá%20Estou%20interessado%20em%20um%20imóvel">
          <h4>CONTATO</h4>
          <Whats>
            <img src={IcWhatsapp} alt="Whatsapp" />

            <p>(13)98804-5152</p>
          </Whats>
        </a>
      </div>
    </Container>
  );
};

export default Footer;
