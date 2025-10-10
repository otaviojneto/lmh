import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Property } from "../../../@types/Propety";
import { CardInfoComplete } from "../../../components/Admin";

import { useProperties } from "@/application/useProperties";
import Title from "../../../components/Admin/Title";
import * as S from "./styles";
import { PropertiesList } from "@/services/properties/types";

export type PropertyProps = Property & {
  id: string;
};
const PropertyList: React.FC = () => {
  const [property, setProperty] = useState<PropertiesList>([]);
  const [deletingIds, setDeletingIds] = useState<string[]>([]);
  // const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { data: dataProperty } = useProperties();
  console.log(dataProperty);

  const handleDeleteProperty = (id: string) => {
    setDeletingIds((prev) => [...prev, id]);
    setProperty((prev) => prev.filter((item) => item.id !== id));
  };
  console.log(property);

  // if (!isLoading)
  //   return (
  //     <S.Loading>
  //       <img src={loading} alt="Loading..." />
  //     </S.Loading>
  //   );
  return (
    <S.PropertyListContainer>
      <Title size="22px" description="Lista de Imóveis" />
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
    </S.PropertyListContainer>
  );
};

export default PropertyList;
