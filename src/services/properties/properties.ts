import { FormValues } from "@/components/FormProperties/schema";
import { api } from "@/services/api";
import { PostPropertyResponse, Properties, PropertiesList } from "./types";

export const properties = {
  getProperties: async (): Promise<PropertiesList> => {
    const response = await api.get<PropertiesList>("properties");
    return response.data;
  },

  getPropertieId: async (id: string): Promise<Properties> => {
    const response = await api.get<Properties>(`properties/${id}`);
    return response.data;
  },

  postProperty: async (data: FormValues): Promise<PostPropertyResponse> => {
    const response = await api.post<PostPropertyResponse>("properties", data);
    return response.data;
  },

  patchProperty: async (
    id: string,
    data: FormValues
  ): Promise<PostPropertyResponse> => {
    const response = await api.patch<PostPropertyResponse>(
      `properties/${id}`,
      data
    );
    return response.data;
  },
};

export const propertyImage = {
  postPropertyImages: async (
    id: string,
    images: string[]
  ): Promise<PostPropertyResponse> => {
    const response = await api.post<PostPropertyResponse>(
      `properties/${id}/images`,
      { images }
    );
    return response.data;
  },
};
