import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Moon, Sun } from "lucide-react";

// Definimos o que o componente espera receber
interface ThemeToggleProps {
  theme: boolean; // true para dark, false para light
  onCheckedChange: () => void;
}

export function ThemeToggle({ theme, onCheckedChange }: ThemeToggleProps) {
  return (
    <div className="flex items-center space-x-2">
      {/* Ícone de Sol - fica cinza no dark, amarelo no light */}
      <Sun className={`h-4 w-4 transition-colors ${!theme ? "text-yellow-500" : "text-muted-foreground"}`} />
      
      <Switch
        id="theme-switch"
        checked={theme}
        onCheckedChange={onCheckedChange}
      />
      
      {/* Ícone de Lua - fica azul no dark, cinza no light */}
      <Moon className={`h-4 w-4 transition-colors ${theme ? "text-blue-400" : "text-muted-foreground"}`} />
      
      <Label htmlFor="theme-switch" className="sr-only">Toggle Theme</Label>
    </div>
  )
}