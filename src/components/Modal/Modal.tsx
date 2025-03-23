import React from "react";
import { SwiperSlide } from "swiper/react";
import { IcClose } from "../../icons";
import SwiperReact from "../SwiperReact";
import * as S from "./styles";
import { Property } from "../../@types";

export type ModalProps = {
  propertie?: Property;
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
              {propertie?.images?.map((img) => (
                <SwiperSlide key={img}>
                  <S.Image src={img} alt="image" />
                </SwiperSlide>
              ))}
            </SwiperReact>
          </S.Rooms>

          <S.Infos>
            <h1>{propertie?.typePropertie}</h1>
            <S.Description>
              <S.Text>Descrição:</S.Text>
              <S.TextDescription>
                {propertie?.descriptionProperty?.description}
              </S.TextDescription>
            </S.Description>
            <S.Description>
              <S.Text>Quartos:</S.Text>
              <S.TextDescription>{propertie?.numberRooms}</S.TextDescription>
            </S.Description>
            <S.Description>
              <S.Text>Garagem:</S.Text>
              <S.TextDescription>{propertie?.garage}</S.TextDescription>
            </S.Description>
            <S.Description>
              <S.Text>Localização:</S.Text>
              <S.TextDescription>
                {propertie?.descriptionProperty?.address} - {propertie?.city} -{" "}
                {propertie?.neighborhood}
              </S.TextDescription>
            </S.Description>
            <S.Description>
              <S.Text>Preço:</S.Text>
              <S.TextDescription>
                {propertie?.descriptionProperty?.price}{" "}
                {propertie?.descriptionProperty?.descriptionValue}
              </S.TextDescription>
            </S.Description>
          </S.Infos>
        </S.Content>
      </S.Container>
    </S.ModalContainer>
  );
};

export default Modal;
