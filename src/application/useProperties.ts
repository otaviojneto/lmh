import { properties, propertyImage } from "@/services/properties/properties";
import { Properties } from "@/services/properties/types";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
  return useMutation<{ id: string; message: string }, unknown, Properties>({
    mutationFn: (data) => properties.postProperty(data),
  });
};

export const usePatchProperty = (id: string) => {
  return useMutation<{ id: string; message: string }, unknown, Properties>({
    mutationFn: (data) => properties.patchProperty(id, data),
  });
};

export const useDeleteProperty = () => {
  const queryClient = useQueryClient();
  return useMutation<{ message: string }, unknown, string>({
    mutationFn: (id) => properties.deleteProperty(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["properties"] });
    },
  });
};

export const usePostPropertyImages = () => {
  return useMutation<
    { id: string; message: string },
    unknown,
    { id: string; images: string[] }
  >({
    mutationFn: ({ id, images }) =>
      propertyImage.postPropertyImages(id, images),
  });
};
