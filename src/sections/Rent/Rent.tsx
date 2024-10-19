import React, { useEffect, useState } from "react";
import { CardInfo, Modal } from "../../components";
import * as S from "./styles";
import imoveis from "../../mocks/imoveis";
import { DescriptionProperty } from "../../@types";

const Rent: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPropertie, setSelectedPropertie] =
    useState<DescriptionProperty>();

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
      window.scroll(0, 470);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  const handleModal = (propertie: DescriptionProperty) => {
    setOpenModal(true);
    setSelectedPropertie(propertie);
  };

  return (
    <S.Container>
      <h1>Imóveis adicionados recentemente</h1>

      <S.Cards>
        {imoveis?.map((propertie, idx) => (
          <CardInfo
            key={idx}
            {...propertie}
            onClick={() => handleModal(propertie?.descriptionProperty)}
          />
        ))}
      </S.Cards>
      {openModal && (
        <Modal
          propertie={selectedPropertie}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </S.Container>
  );
};

export default Rent;
