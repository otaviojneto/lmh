import { ThemeToggle } from "@/components/ui/themeToggle";
import { useTheme } from "@/providers/ThemeContext";
import brand from "../../../assets/brand.png";
import { cn } from "@/lib/utils";


const Nav: React.FC = () => {
const { theme, toggleTheme } = useTheme();


 
  return (
    <nav className="border-b border-[#aba9a9a8] flex items-center justify-between p-4 w-full">
      <div className={cn(theme === "dark" ? "bg-white rounded-full p-1" : "p-1", "cursor-pointer")}>
        <img className="h-12 w-12 object-contain" src={brand} alt="logo" />
      </div>

      <div className="flex items-center gap-2">

        
        <ThemeToggle theme={theme === "dark"} onCheckedChange={() => toggleTheme()} />
      </div>
    </nav>
  );
};

export default Nav;

