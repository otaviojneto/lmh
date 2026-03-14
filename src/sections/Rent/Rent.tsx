import { usePublicProperties } from "@/application/usePublicProperties";
import Loader from "@/components/Loader/Loader";
import React from "react";
import { useNavigate } from "react-router-dom";
import { CardInfo } from "../../components";
import FormAdvertise from "../FormAdvertise";

const Rent: React.FC = () => {
  const { data, isLoading } = usePublicProperties();
  const navigate = useNavigate();
  const properties = Array.isArray(data) ? data : [];


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
        <h1>
          Corretora parceira: <strong>Amélia matsumoto</strong>{" "}
        </h1>
        <h1>
          Creci: <strong>21354</strong>
        </h1>
        <div className="grid grid-cols-4 max-[768px]:grid-cols-1 gap-3 justify-center max-[1200px]:gap-10">
          {properties?.map((property, idx) => {
            const img = property?.property_images?.[0]?.url;
            return (
              <CardInfo
                key={idx}
                {...property}
                img={img}
                value={property?.value}
                onClick={() =>  navigate(`/properties-details/${property?.id}`)}
              />
            );
          })}
        </div>
      </div>

     
      <FormAdvertise />
    </div>
  );
};

export default Rent;
