import { api } from "@/services/api";
import {
  DeletePropertyResponse,
  PostPropertyResponse,
  Property,
  PropertiesList,
} from "./types";

export const properties = {
  getProperties: async (): Promise<PropertiesList> => {
    const response = await api.get<PropertiesList>("properties");
    return response.data;
  },

  getPropertieId: async (id: string): Promise<Property> => {
    const response = await api.get<Property>(`properties/${id}`);
    return response.data;
  },

  postProperty: async (data: Property): Promise<PostPropertyResponse> => {
    const response = await api.post<PostPropertyResponse>("properties", data);
    return response.data;
  },

  patchProperty: async (
    id: string,
    data: Property
  ): Promise<PostPropertyResponse> => {
    const response = await api.patch<PostPropertyResponse>(
      `properties/${id}`,
      data
    );
    return response.data;
  },

  deleteProperty: async (id: string): Promise<DeletePropertyResponse> => {
    const response = await api.delete<PostPropertyResponse>(`properties/${id}`);
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

export const deleteImageId = {
  deletePropertyImages: async (id: string): Promise<PostPropertyResponse> => {
    const response = await api.delete<PostPropertyResponse>(
      `properties/images/${id}`
    );
    return response.data;
  },
};
