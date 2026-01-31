import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/brand.png";
// import { auth, signInWithEmailAndPassword } from "../../../services/firebase";
// import Cookies from "js-cookie";
import { useLogin } from "@/services/token";
import spinner from "../../../icons/spinner.svg";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  // const signup = useSignup();
  const login = useLogin();
  const handleLogin = ({
    email,
    password,
  }: {
    email: string;
    password: string;
  }) => {
    if (!email || !password) {
      setErrorMessage("Preencha todos os campos antes de continuar.");
      toast.error("Preencha todos os campos antes de continuar.");
      return;
    }
    setErrorMessage("");
    login.mutate(
      { email, password },
      {
        onSuccess: () => {
          navigate("/admin");
        },
        onError: (error) => {
          console.error("Erro ao fazer login", error);
          // 4. Adicione feedback visual para o usuário
          toast.error("Credenciais inválidas ou erro de conexão!");
          setErrorMessage("Credenciais inválidas ou erro de conexão!");
        },
      }
    );
  };
  // const handleLogin = async () => {
  //   try {
  //     const userCredential = await signInWithEmailAndPassword(
  //       auth,
  //       values.username,
  //       values.password
  //     );
  //     const idToken = await userCredential.user.getIdToken();

  //     Cookies.set("token", idToken, {
  //       expires: 1,
  //       path: "/",
  //     });

  //     navigate("/admin");
  //   } catch (error) {
  //     console.error("Erro ao fazer login", error);
  //     // 4. Adicione feedback visual para o usuário
  //     alert("Credenciais inválidas ou erro de conexão!");
  //   }
  // };

  return (
    <section className="items-center md:flex h-screen justify-center">
      <div className=" flex flex-col justify-center items-center gap-4 md:border rounded-lg h-[420px] p-6">
        <img src={Logo} className="h-[154px]  w-[115px]" alt="" />
        <div>
          <p className="font-semibold">Bem vindo</p>
          <p className="text-xs text-gray-600">
            Entre com os seus dados nos campos abaixo para fazer login.
          </p>
        </div>
        <Input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          type="password"
          placeholder="senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleLogin({ email, password });
          }}
        />
        {errorMessage && (
          <p className="text-red-500 text-xs font-medium text-start w-full">
            {errorMessage}
          </p>
        )}
        {/* <button
          onClick={() => signup.mutate({ email, password })}
          disabled={signup.isPending}
        >
          Criar conta
        </button> */}
        <div className="w-full flex justify-end">
          <Button
            onClick={() => handleLogin({ email, password })}
            disabled={login.isPending}
            className="px-8 disabled:opacity-80"
            variant={login.isPending ? "outline" : "default"}
          >
            {login.isPending ? (
              <img src={spinner} className="animate-spin ml-2" />
            ) : (
              "Entrar"
            )}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
