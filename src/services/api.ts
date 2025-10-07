import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
  baseURL: import.meta.env.VITE_SUPABASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// 🔒 Interceptor para injetar o token em toda requisição
api.interceptors.request.use(
  (config) => {
    const token = Cookies.get("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
