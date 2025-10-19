import { publicProperties } from "@/services/properties/propertiesPublic";
import { useQuery } from "@tanstack/react-query";

export const usePublicProperties = () => {
  return useQuery({
    queryKey: ["public-properties"],
    queryFn: publicProperties.getPublicProperties,
  });
};
