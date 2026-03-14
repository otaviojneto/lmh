import axios from "axios";
import { Property, PropertiesList } from "./types";

const api = axios.create({
  baseURL: import.meta.env.VITE_SUPABASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const publicProperties = {
  getPublicProperties: async (): Promise<PropertiesList> => {
    const response = await api.get<PropertiesList>(`/public/properties`);
    return response.data;
  },

  getPublicPropertyById: async (id: string): Promise<Property> => {
    const response = await api.get<Property>(`/public/properties/${id}`);
    return response.data;
  },
};
