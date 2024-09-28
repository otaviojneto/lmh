import React, { useEffect, useState } from "react";
import { CardInfo, Modal } from "../../components";
import { Cards, Container } from "./styles";
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
    <Container>
      <h1>Imóveis adicionados recentemente</h1>

      <Cards>
        {imoveis?.map((propertie, idx) => (
          <CardInfo
            key={idx}
            {...propertie}
            onClick={() => handleModal(propertie?.descriptionProperty)}
          />
        ))}
      </Cards>
      {openModal && (
        <Modal
          propertie={selectedPropertie}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </Container>
  );
};

export default Rent;
