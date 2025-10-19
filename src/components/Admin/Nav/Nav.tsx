import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import brand from "../../../assets/brand.png";
import * as S from "./styles";

const Nav: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });
  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("anonymousClient");
    navigate("/admin");
  };

  return (
    <S.ConatinerNav>
      <div>
        <S.Brand src={brand} alt="logo" />
      </div>

      <div>
        <S.BlackSwitch
          checked={darkMode}
          onChange={() => setDarkMode(!darkMode)}
        />

        <S.Out onClick={logout}>sair</S.Out>
      </div>
    </S.ConatinerNav>
  );
};

export default Nav;
