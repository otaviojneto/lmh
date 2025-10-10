import { properties } from "@/services/properties/properties";
import { useQuery } from "@tanstack/react-query";

export const useProperties = () => {
  return useQuery({
    queryKey: ["properties"],
    queryFn: properties.getProperties,
  });
};

export const usePropertieId = (id: string) => {
  return useQuery({
    queryKey: ["propertie", id],
    queryFn: () => properties.getPropertieId(id),
    enabled: !!id, // só executa se o id existir
  });
};
