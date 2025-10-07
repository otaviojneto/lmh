import React from "react";
import * as S from "./styles";
import Title from "../Title";
import { Button, Modal } from "@mui/material";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../../services/firebase";
import ModalInfo from "../ModalInfo";
import { Property as PropertyInfo } from "../../../@types/Propety";
import noImage from "../../../assets/noImage.png";
import { Properties } from "@/services/properties/types";

export type CardInfoCompleteProps = {
  property: Properties;
  // property: PropertyInfo;
  handleEditProperty: () => void;
  onDelete: (id: string) => void;
  isDeleting?: boolean;
};

const CardInfoComplete: React.FC<CardInfoCompleteProps> = ({
  property,
  isDeleting,
  handleEditProperty,
  // onDelete,
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

  // const handleDelete = async () => {
  //   try {
  //     // 1. Deletar imagens no Cloudinary (se existirem).
  //     if (imagePublicIds && imagePublicIds.length > 0) {
  //       const deleteImageResponse = await fetch(
  //         "http://localhost:5000/api/v1/images",
  //         {
  //           method: "DELETE",
  //           headers: {
  //             "Content-Type": "application/json",
  //             Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
  //           },
  //           body: JSON.stringify({
  //             publicIds: imagePublicIds, // 👈 Envie o array completo
  //           }),
  //         }
  //       );

  //       if (!deleteImageResponse.ok) {
  //         const errorData = await deleteImageResponse.json();
  //         throw new Error(errorData.error || "Falha ao deletar imagem");
  //       }
  //     }

  //     // 2. Deletar o documento no Firestore (sempre executa)
  //     await deleteDoc(doc(db, "imoveis", property.id));

  //     // 3. Atualizar a lista
  //     onDelete(property.id);
  //   } catch (error) {
  //     console.error("Erro ao excluir:", error);
  //     alert(error instanceof Error ? error.message : "Erro ao excluir imóvel");
  //   } finally {
  //     setOpenModal(false);
  //   }
  // };

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
            {/* <Button variant="contained" size="small" onClick={handleDelete}> */}
            <Button variant="contained" size="small">
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
