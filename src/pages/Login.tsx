import { useLogin, useSignup } from "@/services/token";
import { useState } from "react";

const AuthPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signup = useSignup();
  const login = useLogin();

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <input
        type="email"
        className="border border-gray-300 rounded px-4 py-2"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="border border-gray-300 rounded px-4 py-2"
        placeholder="senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button
        onClick={() => signup.mutate({ email, password })}
        disabled={signup.isPending}
      >
        Criar conta
      </button>

      <button
        onClick={() => login.mutate({ email, password })}
        disabled={login.isPending}
      >
        Entrar
      </button>
    </div>
  );
};
export default AuthPage;
