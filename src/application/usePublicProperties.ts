import { publicProperties } from "@/services/properties/propertiesPublic";
import { useQuery } from "@tanstack/react-query";

export const usePublicProperties = () => {
  return useQuery({
    queryKey: ["public-properties"],
    queryFn: publicProperties.getPublicProperties,
  });
};

export const usePublicPropertyById = (id: string) => {
  return useQuery({
    queryKey: ["public-property", id],
    queryFn: () => publicProperties.getPublicPropertyById(id),
    enabled: !!id,
  });
};
