import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Menu: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const handleLinkClick = () => {
    navigate("/admin/new-property", { replace: true });
    window.location.reload();
  };

  return (
    <div className={cn("sticky top-0 bg-white border-r border-[#aba9a9a8] h-dvh transition-all duration-150 w-[247px]", openMenu ? "w-[247px]" : "w-2")}>
      <button onClick={() => setOpenMenu(!openMenu)}  className="cursor-pointer border bg-white flex items-center justify-center border-[#aba9a9a8] border-solid border-1 rounded-full h-6 w-6 right-[-12px] font-size-12 absolute top-28 z-1 transition-all duration-200">
        {openMenu ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
      </button>

      <ul className={cn("color-text flex flex-col", openMenu ? "flex" : "hidden")}>
        <Link to="/admin/property-list" className={cn('py-3 px-4 font-semibold transition-all duration-200', pathname === "/admin/property-list" ? "bg-black text-white" : "")}>Lista de Imóveis</Link>
        <Link onClick={handleLinkClick} to="/admin/new-property" className={cn('py-3 px-4 font-semibold transition-all duration-200', pathname === "/admin/new-property" ? "bg-black text-white" : "")}>
          Novo Imóvel
        </Link>
      </ul>

    </div>
  );
};


export default Menu;
