import React, { useEffect, useState } from "react";
import { Hamburguer } from "../../components";
import links from "../../mocks/links";
import theme from "../../styles";
import { Brand } from "./components/brand";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/providers/ThemeContext";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { cn } from "@/lib/utils";


const Nav: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const { theme: themeContext, toggleTheme } = useTheme();
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  // Função para atualizar o estado quando a tela é redimensionada
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };

  useEffect(() => {
    // Adiciona um listener para o evento de redimensionamento
    window.addEventListener("resize", handleResize);

    // Limpa o listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    // Se estiver no modo mobile e o menu estiver aberto, desabilita o scroll
    if (isMobile && openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Limpa o estilo de overflow quando o componente desmontar
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu, isMobile]);
  return (
    <div className="dark:bg-black py-4 fixed w-full z-50">
      <div className="container flex items-center justify-between max-w-[1400px]">
        <Brand href="#" />

        <Hamburguer
          color={theme.colors.white}
          onClick={() => setOpenMenu(!openMenu)}
          isOpen={openMenu}
        />

        <div
          className={`
    absolute right-0 top-[70px] z-[2] flex gap-3 text-center overflow-hidden
    transition-all duration-500 ease-in-out
    ${openMenu ? "flex w-full h-[calc(100vh-70px)] justify-center" : "w-0 h-0"}
    
    md:static md:flex md:w-auto md:h-10 md:bg-transparent
  `}
        >
          <ul
            className={`
      w-full pt-2 transition-all duration-400 ease-in-out
      md:flex md:w-auto md:pt-0 items-center justify-center gap-2
    `}
          >
            {links.map((item) => (
              <li
                key={item.id}
                className="w-full py-2 md:py-0"
              >
                <a
                  href={item.link}
                  className={`
            block w-full font-bold text-[18px]
            px-[140px] py-[9px]
            hover:text-black hover:opacity-80
            md:text-base md:px-[5px] md:py-[5px]
            md:border-b md:border-transparent
            md:hover:border-black md:hover:text-gray-400
            md:transition-all md:duration-400
          `}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          <button className={cn(themeContext === "dark"  ? 'hover:bg-gray-800' : "hover:bg-gray-300", "bg-transparent rounded-lg border-none hover:rounded-lg transition-all duration-300", themeContext === "dark" ? "text-white" : "text-black")} onClick={() => toggleTheme()}>{themeContext === "dark" ? <Sun className="text-white hover:bg-grays-800   px-1 w-8" /> : <Moon className={cn(themeContext === "dark"  ? "text-white" : "text-black", " hover:bg-gray-600! transition-all duration-300 px-1 w-8")} />}</button>
        </div>

      </div>
    </div>
  );
};

export default Nav;
