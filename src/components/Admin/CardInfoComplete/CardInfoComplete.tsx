import React from "react";
import * as S from "./styles";
import Title from "../Title";
import { Button, Modal } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../services/firebase";
import ModalInfo from "../ModalInfo";
import { Property as PropertyInfo } from "../../../@types/Propety";
import noImage from "../../../assets/noImage.png";

export type CardInfoCompleteProps = {
  property: PropertyInfo;
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
    descriptionProperty,
    numberRooms,
    garage,
    typePropertie,
    value,
    city,
    neighborhood,
    imagePublicIds,
  } = property;
  const [openModal, setOpenModal] = React.useState(false);

  const handleDelete = async () => {
    try {
      // 1. Deletar imagens no Cloudinary (se existirem).
      if (imagePublicIds && imagePublicIds.length > 0) {
        const deleteImageResponse = await fetch(
          "http://localhost:5000/api/v1/images",
          {
            method: "DELETE",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
            },
            body: JSON.stringify({
              publicIds: imagePublicIds, // 👈 Envie o array completo
            }),
          }
        );

        if (!deleteImageResponse.ok) {
          const errorData = await deleteImageResponse.json();
          throw new Error(errorData.error || "Falha ao deletar imagem");
        }
      }

      // 2. Deletar o documento no Firestore (sempre executa)
      await deleteDoc(doc(db, "imoveis", property.id));

      // 3. Atualizar a lista
      onDelete(property.id);
    } catch (error) {
      console.error("Erro ao excluir:", error);
      alert(error instanceof Error ? error.message : "Erro ao excluir imóvel");
    } finally {
      setOpenModal(false);
    }
  };

  return (
    <S.CardInfoCompleteContainer>
      <S.Image
        src={property?.images?.[0] ?? noImage}
        alt={property?.typePropertie}
      />
      <S.ContentInfo>
        <div>
          <Title size="20px" description={typePropertie} />
          <S.Text>
            <strong>descrição:</strong> {descriptionProperty?.description}
          </S.Text>
          <S.Text>
            <strong>Endereço:</strong> {descriptionProperty?.address}
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
              <strong>Valor:</strong> {value}{" "}
              {descriptionProperty?.descriptionValue}
            </S.TextValue>
            <S.Text>
              <strong>quartos:</strong> {numberRooms}
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
              <strong>suítes:</strong> {descriptionProperty?.suites}
            </S.Text>
          </S.Flex>
          <S.Flex>
            <S.Text>
              <strong>iptu:</strong> {descriptionProperty?.iptu}
            </S.Text>
            <S.Text>
              <strong>Condomínio:</strong> {descriptionProperty?.condominium}
            </S.Text>
          </S.Flex>
        </div>

        <S.Flex $flexEnd>
          <Button
            onClick={handleEditProperty}
            color="primary"
            size="small"
            variant="contained"
          >
            Editar
          </Button>
          <Button
            onClick={() => setOpenModal(true)}
            color="inherit"
            size="small"
            variant="outlined"
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
            <Button variant="contained" size="small" onClick={handleDelete}>
              Sim
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="small"
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
