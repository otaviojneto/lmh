import { usePublicProperties } from "@/application/usePublicProperties";
import { Properties } from "@/services/properties/types";
import React, { useEffect, useState } from "react";
import { CardInfo, Modal } from "../../components";
import Loader from "@/components/Loader/Loader";
const Rent: React.FC = () => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPropertie, setSelectedPropertie] = useState<Properties>();
  const { data, isLoading } = usePublicProperties();

  useEffect(() => {
    if (openModal) {
      document.body.style.overflow = "hidden";
      window.scroll(0, 470);
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openModal]);

  const handleModal = (formatedPropertie?: Properties | undefined) => {
    setOpenModal(true);
    setSelectedPropertie(formatedPropertie);
  };

  if (isLoading) {
    return (
      <div className="relative min-h-[calc(100dvh-396px)]">
        <Loader />
      </div>
    );
  }

  return (
    <div className="relative min-h-[calc(100dvh-236px)]">
      <div className="container mb-10 relative ">
        <h1 className="text-center text-xl mb-[30px] font-semibold">Imóveis</h1>

        <div className="grid grid-cols-4 max-[768px]:grid-cols-1 gap-3 justify-center max-[1200px]:gap-10">
          {data?.map((property, idx) => {
            const img = property?.property_images?.[0]?.url;
            return (
              <CardInfo
                key={idx}
                {...property}
                img={img}
                value={property?.value}
                onClick={() => handleModal(property as Properties | undefined)}
              />
            );
          })}
        </div>
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
