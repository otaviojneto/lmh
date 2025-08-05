import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Property } from "../../../@types/Propety";
import { CardInfoComplete } from "../../../components/Admin";

import { db } from "../../../services/firebase";
import * as S from "./styles";
import loading from "../../../icons/loading.gif";
import Title from "../../../components/Admin/Title";

export type PropertyProps = Property & {
  id: string;
};
const PropertyList: React.FC = () => {
  const [property, setProperty] = useState<PropertyProps[]>([]);
  const [deletingIds, setDeletingIds] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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
      } finally {
        setIsLoading(false);
      }
    };

    fetchImoveis();
  }, []);

  const handleDeleteProperty = (id: string) => {
    setDeletingIds((prev) => [...prev, id]);
    setProperty((prev) => prev.filter((item) => item.id !== id));
  };

  if (isLoading)
    return (
      <S.Loading>
        <img src={loading} alt="Loading..." />
      </S.Loading>
    );
  return (
    <S.PropertyListContainer>
      <Title size="22px" description="Lista de Imóveis" />
      {property.map((item) => {
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
