import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { List, LogOut, PlusCircle, ReceiptText } from "lucide-react";

const Menu: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const navigate = useNavigate();
  const pathname = useLocation().pathname;
  const handleLinkClick = () => {
    navigate("/admin/new-property", { replace: true });
    window.location.reload();
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("anonymousClient");
    navigate("/admin");
  };


  return (
    <div className={cn("sticky top-0 bg-white dark:bg-black border-r border-[#aba9a9a8] h-dvh transition-all duration-150 w-[247px]", openMenu ? "w-[247px]" : "w-2")}>
      <button onClick={() => setOpenMenu(!openMenu)} className="cursor-pointer border bg-white dark:bg-black flex items-center justify-center border-[#aba9a9a8] border-solid border-1 rounded-full h-6 w-6 right-[-12px] font-size-12 absolute top-28 z-1 transition-all duration-200">
        {openMenu ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
      </button>

      <ul className={cn("color-text flex flex-col", openMenu ? "flex" : "hidden")}>
        <Link to="/admin/property-list" className={cn('py-3 px-4 font-semibold transition-all duration-200 flex items-center gap-2', pathname === "/admin/property-list" ? "bg-black dark:bg-white text-white dark:text-black" : "")}><List /> Lista de Imóveis</Link>
        <Link onClick={handleLinkClick} to="/admin/new-property" className={cn('py-3 px-4 font-semibold transition-all duration-200 flex items-center gap-2', pathname === "/admin/new-property" ? "bg-black dark:bg-white text-white dark:text-black" : "")}>
          <PlusCircle />
          Novo Imóvel
        </Link>
        <Link target="_blank" to="http://www.finecta.com.br/periods" className={cn('py-3 px-4 font-semibold transition-all duration-200 flex items-center gap-2', pathname === "/admin/new-property" ? "bg-black dark:bg-white text-white dark:text-black" : "")}>
          <ReceiptText />
          Contas
        </Link>
      </ul>



      <button className="py-3 px-4 font-semibold text-start absolute bottom-20  w-full flex items-center gap-2" onClick={logout}><LogOut /> Sair</button>
    </div>
  );
};


export default Menu;
