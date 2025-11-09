import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Properties } from "@/services/properties/types";
import React from "react";
import noImage from "../../../assets/noImage.png";

export type CardInfoCompleteProps = {
  property: Properties;
  handleEditProperty: () => void;
  onDelete: (id: string) => void;
  isDeleting?: boolean;
};

const CardInfoComplete: React.FC<CardInfoCompleteProps> = ({
  property,
  isDeleting,
  handleEditProperty,
  onDelete,
}) => {
  const {
    area,
    number_rooms,
    garage,
    type_propertie,
    value,
    city,
    iptu,
    neighborhood,
    address,
    suites,
    condominium,
    description,
    property_images,
    has_garage,
    title_property,
  } = property;
  const [openModal, setOpenModal] = React.useState(false);
  console.log(property);

  const handleDelete = () => {
    onDelete(property.id as string);
    setOpenModal(false);
  };
  console.log(property);

  return (
    <div className="rounded flex gap-5 p-5 border">
      <img
        className="h-72 w-44 object-cover rounded"
        src={property_images?.[0]?.url ?? noImage}
        alt={property?.type_propertie}
      />

      <div className="flex flex-col justify-between w-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-semibold">{type_propertie}</h1>
          <h2 className="text-lg font-semibold">{title_property}</h2>
          <p className="text-sm">
            <strong>descrição:</strong> {description}
          </p>
          <p className="text-sm">
            <strong>Endereço:</strong> {address}
          </p>
          <div className="flex gap-4">
            <p className="text-sm">
              <strong>Bairro:</strong> {neighborhood}
            </p>
            <p className="text-sm">
              <strong>Cidade:</strong> {city}
            </p>
            <p className="text-sm">
              <strong>Valor:</strong> {value}
            </p>
            <p className="text-sm">
              <strong>quartos:</strong> {number_rooms}
            </p>
          </div>
          <div>
            <p className="text-sm">
              <strong>garagem:</strong> {has_garage === "yes" ? "Sim" : "Não"}
            </p>
            <p className="text-sm">
              <strong>vagas de garagem:</strong> {garage}
            </p>
          </div>
          <div className="flex gap-4">
            <p className="text-sm">
              <strong>area m²:</strong> {area}
            </p>
            <p className="text-sm">
              <strong>suítes:</strong> {suites}
            </p>
            <p className="text-sm">
              <strong>iptu:</strong> {iptu}
            </p>
            <p className="text-sm">
              <strong>Condomínio:</strong> {condominium}
            </p>
          </div>
        </div>

        <div className="flex gap-4 justify-end">
          <Button
            onClick={handleEditProperty}
            color="primary"
            variant="default"
          >
            Editar
          </Button>
          <Button
            onClick={() => setOpenModal(true)}
            color="inherit"
            variant="outline"
            disabled={isDeleting}
          >
            {isDeleting ? "Deletando..." : "Deletar"}
          </Button>
        </div>
      </div>
      <Dialog open={openModal} onOpenChange={setOpenModal}>
        <DialogContent className="w-full">
          <div className="flex text-sm font-bold justify-center w-full">
            Você deseja deletar este imóvel?
          </div>
          <div className="flex justify-center gap-4 mt-4">
            <Button variant="default" onClick={handleDelete}>
              Sim
            </Button>
            <Button
              variant="outline"
              color="inherit"
              onClick={() => setOpenModal(false)}
            >
              Não
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CardInfoComplete;
