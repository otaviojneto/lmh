import { Properties } from "@/services/properties/types";
import React from "react";
import { IcBedroom, IcGarage, IcRuler } from "../../icons";
import { Button } from "../ui/button";

export type CardInfoProps = Properties & {
  onClick?: () => void;
  img: string | undefined;
};

const CardInfo: React.FC<CardInfoProps> = ({
  onClick,
  img,
  area,
  number_rooms,
  type_propertie,
  title_property,
  sale_or_rent,
  has_garage,
  value,
  neighborhood,
  city,
}) => {
  const saleOrRent = sale_or_rent === "sale" ? "VENDA" : "ALUGUEL";
  return (
    <div className="shadow-[rgba(50,50,93,0.25)_0px_50px_100px_-20px,rgba(0,0,0,0.3)_0px_30px_60px_-30px,rgba(10,37,64,0.35)_0px_-2px_6px_0px_inset] w-full">
      <button
        className="bg-white rounded-sm text-left w-full"
        type="button"
        onClick={onClick}
      >
        <img
          className="rounded-tl-sm rounded-tr-sm h-[200px] w-full object-cover"
          src={img}
        />

        <div className="p-2">
          <div className="grid gap-0.5 p-1 min-h-[100px]">
            <div>
              <h2 className="text-sm font-bold">{saleOrRent}</h2>
              <h2 className="text-sm font-semibold min-h-12">
                {type_propertie}: {title_property}
              </h2>
            </div>

            <>
              {neighborhood}, {city}
            </>

            <h4 className="mb-1">valor: R$ {value}</h4>
          </div>

          <div className="flex items-center border-t border-gray-300 pt-2.5 justify-around text-center">
            {area !== undefined && area > 0 && (
              <div className="flex flex-col items-center">
                <img className="w-5.5" src={IcRuler} alt="img" />
                <p className="text-xs my-1">M²</p>
                <h5 className="font-semibold text-sm">{area}</h5>
              </div>
            )}

            <div className="flex flex-col items-center">
              <img className="w-5.5" src={IcBedroom} alt="img" />
              <p className="text-xs my-1">Quartos</p>
              <h5 className="font-semibold text-sm">{number_rooms}</h5>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-5.5" src={IcGarage} alt="img" />
              <p className="text-xs my-1">Garagem</p>
              <h5 className="font-semibold text-sm">
                {has_garage === "no"
                  ? "Não"
                  : has_garage === "yes"
                  ? "Sim"
                  : has_garage}
              </h5>
            </div>
          </div>
        </div>

        <div className="pt-0 px-2 pb-2.5">
          <Button
            className="font-semibold text-gray-900 w-full"
            variant="outline"
          >
            Ver Imóvel
          </Button>
        </div>
      </button>
    </div>
  );
};

export default CardInfo;
