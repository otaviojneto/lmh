import React from "react";
import { SwiperSlide } from "swiper/react";
import { IcClose } from "../../icons";
import SwiperReact from "../SwiperReact";
import * as S from "./styles";
import { Properties } from "@/services/properties/types";

export type ModalProps = {
  propertie?: Properties;
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
              {propertie?.property_images?.map((img) => (
                <SwiperSlide key={img.id}>
                  <S.Image src={img?.url} alt="image" />
                </SwiperSlide>
              ))}
            </SwiperReact>
          </S.Rooms>

          <S.Infos>
            <h1 className="text-center text-xl mb-[30px] font-semibold	md:text-2xl">
              {propertie?.title_property}
            </h1>
            <S.Description>
              <S.Text>Descrição:</S.Text>
              <S.TextDescription>{propertie?.description}</S.TextDescription>
            </S.Description>
            <S.Description>
              <S.Text>Quartos:</S.Text>
              <S.TextDescription>{propertie?.number_rooms}</S.TextDescription>
            </S.Description>
            <S.Description>
              <S.Text>Garagem:</S.Text>
              <S.TextDescription>{propertie?.garage}</S.TextDescription>
            </S.Description>
            <S.Description>
              <S.Text>Localização:</S.Text>
              <S.TextDescription>
                {propertie?.address} - {propertie?.city} -{" "}
                {propertie?.neighborhood}
              </S.TextDescription>
            </S.Description>
            <S.Description>
              <S.Text>Preço:</S.Text>
              <S.TextDescription>
                {propertie?.value} {propertie?.complementary_value_text}
              </S.TextDescription>
            </S.Description>
          </S.Infos>
        </S.Content>
      </S.Container>
    </S.ModalContainer>
  );
};

export default Modal;
