import { api } from "@/services/api";
import { PropertiesList } from "./types";

export const properties = {
  getProperties: async (): Promise<PropertiesList> => {
    const response = await api.get<PropertiesList>("properties");
    return response.data;
  },
};
