import axios from "axios";
import Cookies from "js-cookie";

let navigate: (path: string) => void;

export const setNavigate = (navFn: (path: string) => void) => {
  navigate = navFn;
};

export const api = axios.create({
  baseURL: import.meta.env.VITE_SUPABASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// Interceptor para injetar o token em toda requisição
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

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response?.status === 401) {
      const refreshToken = Cookies.get("refresh_token");
      if (refreshToken) {
        try {
          const { data } = await axios.post(
            `${
              import.meta.env.VITE_SUPABASE_URL
            }/auth/v1/token?grant_type=refresh_token`,
            { refresh_token: refreshToken },
            {
              headers: {
                apikey: import.meta.env.VITE_SUPABASE_ANON_KEY,
                "Content-Type": "application/json",
              },
            }
          );

          // Atualiza cookies
          Cookies.set("token", data.access_token);
          Cookies.set("refresh_token", data.refresh_token);

          // Reenvia a requisição original com o novo token
          error.config.headers.Authorization = `Bearer ${data.access_token}`;
          return api.request(error.config);
        } catch (refreshError) {
          console.error("Erro ao renovar o token:", refreshError);
          Cookies.remove("token");
          Cookies.remove("refresh_token");
          if (navigate) navigate("/admin/login");
        }
      } else {
        // Sem refresh_token → redireciona para login
        Cookies.remove("token");
        Cookies.remove("refresh_token");
        if (navigate) navigate("/admin/login");
      }
    }
    return Promise.reject(error);
  }
);
