import React, { useState } from "react";
import AccessLogin from "../../../components/Admin/AccessLogin";
import { useNavigate } from "react-router-dom";
import Logo from "../../../assets/brand.png";
import * as S from "./styles";
import { auth, signInWithEmailAndPassword } from "../../../services/firebase";
import Cookies from "js-cookie";

const Login: React.FC = () => {
  const [values, setValues] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: false, password: false });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        values.username,
        values.password
      );
      const idToken = await userCredential.user.getIdToken();

      Cookies.set("token", idToken, {
        expires: 1,
        path: "/",
      });

      navigate("/admin");
    } catch (error) {
      console.error("Erro ao fazer login", error);
      // 4. Adicione feedback visual para o usuário
      alert("Credenciais inválidas ou erro de conexão!");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      username: values.username.trim() === "",
      password: values.password.length < 6,
    };
    setErrors(newErrors);

    if (!newErrors.username && !newErrors.password) {
      handleLogin();
    }
  };

  return (
    <S.Container>
      <AccessLogin
        logo={Logo}
        username={values.username}
        password={values.password}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        errorsPassword={errors.password}
        errorsUsername={errors.username}
      />
    </S.Container>
  );
};

export default Login;
