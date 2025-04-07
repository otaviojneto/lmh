import { collection, getDocs } from "@firebase/firestore";
import React, { useEffect, useState } from "react";
import { Property } from "../../@types";
import { CardInfo, Modal } from "../../components";
import imoveis from "../../mocks/imoveis";
import { db } from "../../services/firebase";
const Rent: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [property, setProperty] = useState<Property[]>([]);
  const [selectedPropertie, setSelectedPropertie] = useState<Property>();

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "imoveis"));
        const imoveisData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Property[];

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

  const formatedPropertie = property.map((propertie) => ({
    ...propertie,
    img: imoveis.find((item) => item.id === propertie.id)?.img,
  }));

  const handleModal = (formatedPropertie?: Property | undefined) => {
    setOpenModal(true);
    setSelectedPropertie(formatedPropertie);
  };
  return (
    <div className="container mb-10 relative">
      <h1 className="text-center text-xl mb-[30px] font-semibold	md:text-3xl">
        Imóveis adicionados recentemente
      </h1>

      <div className="grid grid-cols-4 gap-2 justify-center max-[1200px]:gap-10">
        {formatedPropertie?.map((propertie, idx) => {
          const img =
            typeof propertie.images?.[0] === "object"
              ? propertie.images?.[0]
              : propertie.images?.[0];
          return (
            <CardInfo
              key={idx}
              {...propertie}
              img={img}
              value={propertie.value.toString()}
              onClick={() => handleModal(propertie as Property | undefined)}
            />
          );
        })}
      </div>

      {openModal && (
        <Modal
          propertie={selectedPropertie}
          closeModal={() => setOpenModal(false)}
        />
      )}
    </div>
  );
};

export default Rent;
