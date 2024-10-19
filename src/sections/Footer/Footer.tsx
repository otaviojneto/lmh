import React from "react";
import { IcWhatsapp } from "../../icons";
import * as S from "./styles";

const Footer: React.FC = () => {
  return (
    <S.Container>
      <div>
        <a href="https://www.google.com/maps/place/R.+Rio+Grande+do+Norte,+70+-+Pomp%C3%A9ia,+Santos+-+SP,+11065-460/@-23.964619,-46.3434245,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce03167b6c07b3:0x1c53c3a6d9721452!8m2!3d-23.9646239!4d-46.3412358">
          <S.Contact>LOCALIZAÇÃO</S.Contact>
          <S.Text>Rua Rio Grande do Norte 70, Sala 4F.</S.Text>
          <S.Text>Santos,Sp</S.Text>
        </a>
      </div>

      <S.WhatsBase>
        <a href="https://api.whatsapp.com/send?phone=13988045152&text=Olá%20Estou%20interessado%20em%20um%20imóvel">
          <S.Contact>CONTATO</S.Contact>
          <S.Whats>
            <img src={IcWhatsapp} alt="Whatsapp" />

            <S.Text>(13)98804-5152</S.Text>
          </S.Whats>
        </a>
      </S.WhatsBase>
    </S.Container>
  );
};

export default Footer;
