import React from "react";
import { IcBedroom, IcGarage, IcRuler } from "../../icons";
import { Base, Card, Footer, Image, Info } from "./styles";
import { CardProperty } from "../../@types/types";

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
    <Card>
      <button type="button" onClick={onClick}>
        <Image src={img} />

        <Base>
          <Info>
            <h2>{typePropertie}</h2>

            <p>
              {neighborhood}, {city}
            </p>

            <h4>valor: {value}</h4>
          </Info>

          <Footer>
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
          </Footer>
        </Base>
      </button>
    </Card>
  );
};

export default CardInfo;
