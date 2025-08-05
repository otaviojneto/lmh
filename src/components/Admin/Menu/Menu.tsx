import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const Menu: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [colorChanged, setColorChanged] = useState(false);
  const navigate = useNavigate();
  const handleLinkClick = () => {
    navigate("/admin/new-property", { replace: true });
    window.location.reload();
  };

  useEffect(() => {
    if (openMenu) {
      const timer = setTimeout(() => {
        setColorChanged(true);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setColorChanged(false);
    }
  }, [openMenu]);
  return (
    <S.MenuContainer $openMenu={openMenu}>
      <S.Button $openMenu={openMenu} onClick={() => setOpenMenu(!openMenu)}>
        {openMenu ? <ChevronLeft /> : <ChevronRight />}
      </S.Button>
      <S.List $openMenu={openMenu} $colorChanged={colorChanged}>
        <S.Link to="/admin/property-list">Lista de Imóveis</S.Link>
        <S.Link onClick={handleLinkClick} to="/admin/new-property">
          Novo Imóvel
        </S.Link>
      </S.List>
    </S.MenuContainer>
  );
};

export default Menu;
