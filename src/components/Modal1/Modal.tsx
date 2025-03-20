import React from "react";
import { SwiperSlide } from "swiper/react";
import { Property1 } from "../../@types";
import { IcClose } from "../../icons";
import SwiperReact from "../SwiperReact";
import * as S from "./styles";

export type ModalProps = {
  propertie?: Property1;
  closeModal?: () => void;
  listImages?: Pic[];
};

export type Pic = {
  pic: string;
};

const Modal: React.FC<ModalProps> = ({ propertie, closeModal, listImages }) => {
  console.log(propertie);

  return (
    <S.ModalContainer>
      <S.Container>
        <S.Header>
          <S.Close src={IcClose} alt="close" onClick={closeModal} />
        </S.Header>

        <S.Content>
          <S.Rooms>
            <SwiperReact>
              {listImages?.map((images) => (
                <SwiperSlide key={images?.pic}>
                  <S.Image src={images?.pic} alt="image" />
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
                {propertie?.descriptionProperty?.price}
              </S.TextDescription>
            </S.Description>
          </S.Infos>
        </S.Content>
      </S.Container>
    </S.ModalContainer>
  );
};

export default Modal;
