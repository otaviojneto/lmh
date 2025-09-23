import React from "react";
import { CardProperty } from "../../@types/types";
import { IcBedroom, IcGarage, IcRuler } from "../../icons";
import { Button } from "../ui/button";

export type CardInfoProps = CardProperty & {
  onClick?: () => void;
};

const CardInfo: React.FC<CardInfoProps> = ({
  img,
  onClick,
  typePropertie,
  city,
  hasGarage,
  neighborhood,
  value,
  m,
  numberRooms,
}) => {
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
            <h2 className="text-sm font-bold min-h-12">{typePropertie}</h2>

            <>
              {neighborhood}, {city}
            </>

            <h4 className="mb-1">valor: R$ {value}</h4>
          </div>

          <div className="flex items-center border-t border-gray-300 pt-2.5 justify-around text-center">
            {m !== undefined && m > 0 && (
              <div className="flex flex-col items-center">
                <img className="w-5.5" src={IcRuler} alt="img" />
                <p className="text-xs my-1">M²</p>
                <h5 className="font-semibold text-sm">{m}</h5>
              </div>
            )}

            <div className="flex flex-col items-center">
              <img className="w-5.5" src={IcBedroom} alt="img" />
              <p className="text-xs my-1">Quartos</p>
              <h5 className="font-semibold text-sm">{numberRooms}</h5>
            </div>

            <div className="flex flex-col items-center">
              <img className="w-5.5" src={IcGarage} alt="img" />
              <p className="text-xs my-1">Garagem</p>
              <h5 className="font-semibold text-sm">
                {hasGarage === "nao"
                  ? "Não"
                  : hasGarage === "sim"
                  ? "Sim"
                  : hasGarage}
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
