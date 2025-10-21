import { useMutation } from "@tanstack/react-query";
import { api } from "./api";
import Cookies from "js-cookie";

type AuthResponse = {
  user: { id: string; email: string };
  session: { access_token: string };
};

export function useSignup() {
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const res = await api.post<AuthResponse>("/auth/signup", data);
      return res.data;
    },
  });
}

export function useLogin() {
  return useMutation({
    mutationFn: async (data: { email: string; password: string }) => {
      const res = await api.post<AuthResponse>("/auth/login", data);
      // salva token para usar depois
      // localStorage.setItem("token", res.data.session.access_token);
      const token = res.data.session.access_token;

      Cookies.set("token", token, {
        expires: 1, // expira em 1 dia
        path: "/", // disponível em toda a aplicação
        secure: true, // importante se estiver em https
        sameSite: "strict", // mais seguro
      });
      return res.data;
    },
  });
}
