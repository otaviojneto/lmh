import { useDeleteProperty, useProperties } from "@/application/useProperties";
import Loader from "@/components/Loader/Loader";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardInfoComplete } from "../../../components/Admin";
import { toast } from "sonner";
import { CheckCircle2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Properties } from "@/services/properties/types";

export type PropertyProps = Properties & {
  id: string;
};
const PropertyList: React.FC = () => {
  const [deletingIds, setDeletingIds] = useState<string[]>([]);
  const navigate = useNavigate();
  const { data: dataProperty, isLoading } = useProperties();
  const { mutateAsync: deleteProperty } = useDeleteProperty();
  console.log(dataProperty);

  const handleDeleteProperty = (id: string) => {
    setDeletingIds((prev) => [...prev, id]);
    deleteProperty(id, {
      onSuccess: (response) => {
        toast.custom(() => (
          <div className="flex items-center gap-3 bg-green-100 text-green-800 p-3 rounded-xl shadow">
            <CheckCircle2 className="w-5 h-5 text-green-800" />
            <span className="font-semibold text-sm">{response.message}</span>
          </div>
        ));
      },
      onError: () => {
        toast.custom(() => (
          <div className="flex items-center gap-3 bg-red-100 text-red-800 p-3 rounded-xl shadow">
            <X className="w-5 h-5 text-red-600" />
            <span className="font-semibold">Erro ao criar imóvel</span>
          </div>
        ));
      },
    });
  };

  if (isLoading) return <Loader />;
  return (
    <section className="flex flex-col gap-6 max-w-7xl">
      <h1 className="text-2xl font-semibold">Lista de Imóveis</h1>
      {Number(dataProperty?.length) > 0 ? (
        <>
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
        </>
      ) : (
        <div className="text-center mt-36 ">
          <p className="text-3xl text-gray-700">Nenhum imóvel cadastrado.</p>

          <Button
            variant="outline"
            className="mt-6"
            onClick={() => navigate("/admin/new-property")}
          >
            Cadastrar imóvel
          </Button>
        </div>
      )}
    </section>
  );
};

export default PropertyList;
