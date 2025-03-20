import React from "react";
import { IcBedroom, IcGarage, IcRuler } from "../../icons";
import * as S from "./styles";
import { CardProperty } from "../../@types/types";
import Button from "../Button";

export type CardInfoProps = CardProperty & {
  onClick?: () => void;
};

const CardInfo: React.FC<CardInfoProps> = ({
  img,
  onClick,
  typePropertie,
  city,
  garage,
  neighborhood,
  value,
  m,
  numberRooms,
}) => {
  return (
    <S.Card>
      <button type="button" onClick={onClick}>
        <S.Image src={img} />

        <S.Base>
          <S.Info>
            <h2>{typePropertie}</h2>

            <p>
              {neighborhood}, {city}
            </p>

            <h4>valor: R$ {value}</h4>
          </S.Info>

          <S.Footer>
            {m !== undefined && m > 0 && (
              <div>
                <img src={IcRuler} alt="img" />
                <p>M²</p>
                <h5>{m}</h5>
              </div>
            )}

            <div>
              <img src={IcBedroom} alt="img" />
              <p>Quartos</p>
              <h5>{numberRooms}</h5>
            </div>

            <div>
              <img src={IcGarage} alt="img" />
              <p>Garagem</p>
              <h5>{garage}</h5>
            </div>
          </S.Footer>
        </S.Base>

        <S.BaseButton>
          <Button variant="outline">Ver Imóvel</Button>
        </S.BaseButton>
      </button>
    </S.Card>
  );
};

export default CardInfo;
