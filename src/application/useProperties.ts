import { properties } from "@/services/properties/properties";
import { useQuery } from "@tanstack/react-query";

export const useProperties = () => {
  return useQuery({
    queryKey: ["properties"],
    queryFn: properties.getProperties,
  });
};
