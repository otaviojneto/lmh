import { Properties } from "@/services/properties/types";
import { Modal } from "@mui/material";
import React from "react";
import noImage from "../../../assets/noImage.png";
import ModalInfo from "../ModalInfo";
import Title from "../Title";
import * as S from "./styles";
import { Button } from "@/components/ui/button";

export type CardInfoCompleteProps = {
  property: Properties;
  handleEditProperty: () => void;
  onDelete: (id: string) => void;
  isDeleting?: boolean;
};

const CardInfoComplete: React.FC<CardInfoCompleteProps> = ({
  property,
  isDeleting,
  handleEditProperty,
  onDelete,
}) => {
  const {
    area,
    number_rooms,
    garage,
    type_propertie,
    value,
    city,
    iptu,
    neighborhood,
    address,
    suites,
    condominium,
    description,
    property_images,
  } = property;
  const [openModal, setOpenModal] = React.useState(false);
  console.log(property);

  const handleDelete = () => {
    onDelete(property.id as string);
    setOpenModal(false);
  };

  return (
    <S.CardInfoCompleteContainer>
      <S.Image
        src={property_images?.[0]?.url ?? noImage}
        alt={property?.type_propertie}
      />
      <S.ContentInfo>
        <div>
          <Title size="20px" description={type_propertie} />
          <S.Text>
            <strong>descrição:</strong> {description}
          </S.Text>
          <S.Text>
            <strong>Endereço:</strong> {address}
          </S.Text>
          <S.Flex>
            <S.Text>
              <strong>Bairro:</strong> {neighborhood}
            </S.Text>
            <S.Text>
              <strong>Cidade:</strong> {city}
            </S.Text>
          </S.Flex>
          <S.Flex>
            <S.TextValue>
              <strong>Valor:</strong> {value}
            </S.TextValue>
            <S.Text>
              <strong>quartos:</strong> {number_rooms}
            </S.Text>
            <S.Text>
              <strong>area m²:</strong> {area}
            </S.Text>
          </S.Flex>
          <S.Flex>
            <S.Text>
              <strong>vagas de garagem:</strong> {garage}
            </S.Text>
            <S.Text>
              <strong>suítes:</strong> {suites}
            </S.Text>
          </S.Flex>
          <S.Flex>
            <S.Text>
              <strong>iptu:</strong> {iptu}
            </S.Text>
            <S.Text>
              <strong>Condomínio:</strong> {condominium}
            </S.Text>
          </S.Flex>
        </div>

        <S.Flex $flexEnd>
          <Button
            onClick={handleEditProperty}
            color="primary"
            variant="default"
          >
            Editar
          </Button>
          <Button
            onClick={() => setOpenModal(true)}
            color="inherit"
            variant="outline"
            disabled={isDeleting}
          >
            {isDeleting ? "Deletando..." : "Deletar"}
          </Button>
        </S.Flex>
      </S.ContentInfo>

      <Modal color="white" open={openModal} onClose={() => setOpenModal(false)}>
        <ModalInfo width={400} onClose={() => setOpenModal(false)}>
          <S.Info>Você deseja deletar este imóvel?</S.Info>
          <S.StyleButton>
            <Button variant="default" onClick={handleDelete}>
              Sim
            </Button>
            <Button
              variant="outline"
              color="inherit"
              onClick={() => setOpenModal(false)}
            >
              Não
            </Button>
          </S.StyleButton>
        </ModalInfo>
      </Modal>
    </S.CardInfoCompleteContainer>
  );
};

export default CardInfoComplete;
