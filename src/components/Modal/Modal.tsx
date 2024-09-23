import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperReact from "../SwiperReact/SwiperReact";
import {
  Close,
  Container,
  Content,
  Header,
  Image,
  Infos,
  ModalContainer,
  Rooms,
} from "./styles";

export type ModalProps = {
  closeModal?: () => void;
};

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <ModalContainer>
      <Container>
        <Header>
          <h1>Titulo</h1>
          <Close onClick={closeModal} />
        </Header>

        <Content>
          <Rooms>
            <SwiperReact>
              <SwiperSlide>
                <Image
                  src="https://s2.glbimg.com/NO1Mrkp3Z96htIx8_RhrdHTux0w=/e.glbimg.com/og/ed/f/original/2018/03/08/decoracao-de-quarto-cabeceira-suede-rosa-roupa-de-cama-branco-com-rosa-papel-de-parede-florido-romantico-abajur-e-pendente-brancoarquiteta-leticia-arcangeli.jpg"
                  alt="Quarto decorado com cabeceira de suede rosa"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src="https://media-magazine.trivago.com/wp-content/uploads/2021/03/22003154/pousadas-com-hidro-vista-panormica-sp-santo-antonio-do-pinhal-brasil-pousada-quinta-dos-pinhais-hidromassagem-.jpg"
                  alt="Pousada com hidro e vista panorâmica"
                />
              </SwiperSlide>
            </SwiperReact>
          </Rooms>

          <Infos>
            <p>descrição</p>
            <p>quartos</p>
            <p>garagem</p>
            <p>localização</p>
            <p>Preço</p>
          </Infos>
        </Content>
      </Container>
    </ModalContainer>
  );
};

export default Modal;
