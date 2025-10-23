import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperReact from "../SwiperReact";
import * as S from "./styles";
import { Properties } from "@/services/properties/types";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

export type ModalProps = {
  propertie?: Properties;
  closeModal?: () => void;
  open: boolean;
};

const Modal: React.FC<ModalProps> = ({ open, propertie, closeModal }) => {
  const saleOrRent = propertie?.sale_or_rent === "sale" ? "Venda" : "Aluguel";
  return (
    <Dialog open={open} onOpenChange={closeModal}>
      <DialogContent className="w-full">
        <DialogHeader className="w-full">
          <DialogTitle></DialogTitle>
        </DialogHeader>
        <DialogDescription className="md:h-[500px] w-full overflow-y-auto">
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
              {saleOrRent}: {propertie?.title_property}
            </h1>
            <S.Description>
              <S.Text>Descrição:</S.Text>
              <S.TextDescription>{propertie?.description}</S.TextDescription>
            </S.Description>
            <S.Description>
              <S.Text>Suites:</S.Text>
              <S.TextDescription>{propertie?.suites}</S.TextDescription>
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

          <div className="px-5 flex gap-4 items-center">
            <p className="font-semibold">Contato:</p>
            <a href="https://api.whatsapp.com/send?phone=13988045152&text=Olá%20Estou%20interessado%20em%20um%20imóvel">
              <Button variant="outline">Clique aqui</Button>
            </a>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
