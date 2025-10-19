import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setNavigate } from "@/services/api";

export const NavigationProvider = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setNavigate(navigate);
  }, [navigate]);

  return null;
};
