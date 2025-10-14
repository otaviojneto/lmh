import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Property } from "../../../@types/Propety";
import { CardInfoComplete } from "../../../components/Admin";
import { useProperties } from "@/application/useProperties";
import Loader from "@/components/Loader/Loader";
import { PropertiesList } from "@/services/properties/types";

export type PropertyProps = Property & {
  id: string;
};
const PropertyList: React.FC = () => {
  const [property, setProperty] = useState<PropertiesList>([]);
  const [deletingIds, setDeletingIds] = useState<string[]>([]);
  const navigate = useNavigate();
  const { data: dataProperty, isLoading } = useProperties();
  console.log(dataProperty);

  const handleDeleteProperty = (id: string) => {
    setDeletingIds((prev) => [...prev, id]);
    setProperty((prev) => prev.filter((item) => item.id !== id));
  };

  if (isLoading) return <Loader />;
  return (
    <section className="flex flex-col gap-6 max-w-7xl">
      <h1 className="text-2xl font-semibold">Lista de Imóveis</h1>
      {dataProperty?.map((item) => {
        return (
          <CardInfoComplete
            onDelete={() => handleDeleteProperty(item.id)}
            handleEditProperty={() =>
              navigate(`/admin/edit-property/${item.id}`)
            }
            key={item.id}
            isDeleting={deletingIds.includes(item.id)}
            property={item}
          />
        );
      })}
    </section>
  );
};

export default PropertyList;
