import { api } from "@/services/api";
import { PropertiesList, Properties } from "./types";

export const properties = {
  getProperties: async (): Promise<PropertiesList> => {
    const response = await api.get<PropertiesList>("properties");
    return response.data;
  },

  getPropertieId: async (id: string): Promise<Properties> => {
    const response = await api.get<Properties>(`properties/${id}`);
    return response.data;
  },
};
