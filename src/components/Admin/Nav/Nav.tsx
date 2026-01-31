import { Switch } from "@/components/ui/switch";
import Cookies from "js-cookie";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import brand from "../../../assets/brand.png";


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
    <nav className="bg-white border-b border-[#aba9a9a8] flex items-center justify-between p-4 w-full">
      <div className="cursor-pointer">
        <img className="h-12 w-12 object-contain" src={brand} alt="logo" />
      </div>

      <div className="flex items-center gap-2">
        <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
        

        <button onClick={logout}>sair</button>
      </div>
    </nav>
  );
};

export default Nav;
