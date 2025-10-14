import { FormValues } from "@/components/FormProperties/schema";
import { properties, propertyImage } from "@/services/properties/properties";
import { useMutation, useQuery } from "@tanstack/react-query";

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

export const usePostProperty = () => {
  return useMutation<{ id: string; message: string }, unknown, FormValues>({
    mutationFn: (data) => properties.postProperty(data),
  });
};

export const usePatchProperty = (id: string) => {
  return useMutation<{ id: string; message: string }, unknown, FormValues>({
    mutationFn: (data) => properties.patchProperty(id, data),
  });
};

export const usePatchPropertyImages = (id: string) => {
  return useMutation<{ id: string; message: string }, unknown, string[]>({
    mutationFn: (images) => propertyImage.postPropertyImages(id, images),
  });
};
