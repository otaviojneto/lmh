import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperReact from "../SwiperReact";
import * as S from "./styles";
import { DescriptionProperty } from "../../@types";
import { IcClose } from "../../icons";

export type ModalProps = {
  propertie?: DescriptionProperty;
  closeModal?: () => void;
};

const Modal: React.FC<ModalProps> = ({ propertie, closeModal }) => {
  return (
    <S.ModalContainer>
      <S.Container>
        <S.Header>
          <S.Close src={IcClose} alt="close" onClick={closeModal} />
        </S.Header>

        <S.Content>
          <S.Rooms>
            <SwiperReact>
              {propertie?.img?.map((images) => (
                <SwiperSlide key={images?.pic}>
                  <S.Image src={images?.pic} alt="image" />
                </SwiperSlide>
              ))}
            </SwiperReact>
          </S.Rooms>

          <S.Infos>
            <h1>{propertie?.title}</h1>
            <S.Description>
              <S.Text>Descrição:</S.Text>{" "}
              <S.TextDescription>{propertie?.description}</S.TextDescription>
            </S.Description>
            <S.Description>
              <S.Text>Quartos:</S.Text>
              <S.TextDescription>{propertie?.room}</S.TextDescription>
            </S.Description>
            <S.Description>
              <S.Text>Garagem:</S.Text>
              <S.TextDescription>{propertie?.garage}</S.TextDescription>
            </S.Description>
            <S.Description>
              <S.Text>Localização:</S.Text>
              <S.TextDescription>{propertie?.adress}</S.TextDescription>
            </S.Description>
            <S.Description>
              <S.Text>Preço:</S.Text>
              <S.TextDescription>{propertie?.price}</S.TextDescription>
            </S.Description>
          </S.Infos>
        </S.Content>
      </S.Container>
    </S.ModalContainer>
  );
};

export default Modal;
