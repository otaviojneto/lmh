import { collection, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { DescriptionProperty, Property1 } from "../../@types";
import { CardInfo, Modal, Modal1 } from "../../components";
import imoveis from "../../mocks/imoveis";
import { db } from "../../services/firebase";
import * as S from "./styles";

const Rent: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [property, setProperty] = useState<Property1[]>([]);
  const [selectedPropertie, setSelectedPropertie] =
    useState<DescriptionProperty>();
  const [selectedPropertie1, setSelectedPropertie1] = useState<Property1>();

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "imoveis"));
        const imoveisData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Property1[];

        setProperty(imoveisData);
      } catch (error) {
        console.error("Erro ao buscar imóveis:", error);
      }
    };

    fetchImoveis();
  }, []);
  console.log(property);

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

  const handleModal1 = (propertie?: Property1 | undefined) => {
    setOpenModal(true);
    setSelectedPropertie1(propertie);
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
      <S.Cards>
        {property?.map((propertie, idx) => (
          <CardInfo
            key={idx}
            {...propertie}
            value={propertie.value.toString()}
            onClick={() => handleModal1(propertie as Property1 | undefined)}
          />
        ))}
      </S.Cards>
      {/* {openModal && (
        <Modal
          propertie={selectedPropertie}
          closeModal={() => setOpenModal(false)}
        />
      )} */}
      {openModal && (
        <Modal1
          propertie={selectedPropertie1}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </S.Container>
  );
};

export default Rent;
