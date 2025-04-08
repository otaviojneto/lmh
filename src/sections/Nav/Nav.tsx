import React, { useEffect, useState } from "react";
import { Hamburguer } from "../../components";
import { Links } from "../../mocks";
import theme from "../../styles";

import * as S from "./styles";

const Nav: React.FC<S.OpenProps> = () => {
  const [openMenu, setOpenMenu] = useState(false);

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
    <div className=" bg-black py-4">
      <div className="container flex items-center justify-between">
        <S.Brand href="#" />

        <Hamburguer
          color={theme.colors.white}
          onClick={() => setOpenMenu(!openMenu)}
          isOpen={openMenu}
        />

        <S.Menu $isOpen={openMenu}>
          <ul>
            {Links.map((item) => (
              <li key={item.id}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
        </S.Menu>
      </div>
    </div>
  );
};

export default Nav;
