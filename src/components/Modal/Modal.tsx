import React from "react";
import { SwiperSlide } from "swiper/react";
import SwiperReact from "../SwiperReact";
import { Properties } from "@/services/properties/types";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";

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
        <DialogDescription className="h-[500px] w-full overflow-y-auto">
          <div className="p-5 md:px-5 md:pb-5 md:pt-0">
            <SwiperReact>
              {propertie?.property_images?.map((img) => (
                <SwiperSlide key={img.id}>
                  <img
                    className="max-w-full object-cover"
                    src={img?.url}
                    alt="image"
                  />
                </SwiperSlide>
              ))}
            </SwiperReact>
          </div>
          <div className="p-5">
            <h1 className="text-center text-xl mb-[30px] font-semibold	md:text-2xl">
              {saleOrRent}: {propertie?.title_property}
            </h1>
            <div className="flex gap-1">
              <p className="text-[#273240] font-semibold min-w-[100px]">
                Descrição:
              </p>
              <p className="text-[#273240]">{propertie?.description}</p>
            </div>
            <div className="flex gap-1">
              <p className="text-[#273240] font-semibold min-w-[100px]">
                Suites:
              </p>
              <p className="text-[#273240]">{propertie?.suites}</p>
            </div>
            <div className="flex gap-1">
              <p className="text-[#273240] font-semibold min-w-[100px]">
                Quartos:
              </p>
              <p className="text-[#273240]">{propertie?.number_rooms}</p>
            </div>
            <div className="flex gap-1">
              <p className="text-[#273240] font-semibold min-w-[100px]">
                Garagem:
              </p>
              <p className="text-[#273240]">{propertie?.garage}</p>
            </div>
            <div className="flex gap-1">
              <p className="text-[#273240] font-semibold min-w-[100px]">
                Localização:
              </p>
              <p className="text-[#273240]">
                {propertie?.address} - {propertie?.city} -{" "}
                {propertie?.neighborhood}
              </p>
            </div>
            <div className="flex gap-1">
              <p className="text-[#273240] font-semibold min-w-[100px]">
                Preço:
              </p>
              <p className="text-[#273240]">
                {propertie?.value} {propertie?.complementary_value_text}
              </p>
            </div>
          </div>

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
