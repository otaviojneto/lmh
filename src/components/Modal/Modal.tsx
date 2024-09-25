import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperReact from "../SwiperReact";
import * as S from "./styles";
import imoveis from "../../mocks/imoveis";
import { Property } from "../../@types";

export type ModalProps = {
  closeModal?: () => void;
};

const Modal: React.FC<ModalProps> = ({ closeModal }) => {
  return (
    <S.ModalContainer>
      {imoveis.map((property: Property) => (
        <S.Container>
          <S.Header>
            <S.Close onClick={closeModal} />
          </S.Header>

          <S.Content>
            <S.Rooms>
              <SwiperReact>
                {property?.img?.map((img) => (
                  <SwiperSlide key={img?.pic}>
                    <S.Image src={img?.pic} alt="image" />
                  </SwiperSlide>
                ))}
              </SwiperReact>
            </S.Rooms>

            <S.Infos>
              <h1>{property?.title}</h1>
              <S.Description>
                <S.Text>Descrição:</S.Text>{" "}
                <S.TextDescription>{property?.description}</S.TextDescription>
              </S.Description>
              <S.Description>
                <S.Text>Quartos:</S.Text>
                <S.TextDescription>{property?.room}</S.TextDescription>
              </S.Description>
              <S.Description>
                <S.Text>Garagem:</S.Text>
                <S.TextDescription>{property?.garage}</S.TextDescription>
              </S.Description>
              <S.Description>
                <S.Text>Localização:</S.Text>
                <S.TextDescription>{property?.adress}</S.TextDescription>
              </S.Description>
              <S.Description>
                <S.Text>Preço:</S.Text>
                <S.TextDescription>{property?.price}</S.TextDescription>
              </S.Description>
            </S.Infos>
          </S.Content>
        </S.Container>
      ))}
    </S.ModalContainer>
  );
};

export default Modal;
