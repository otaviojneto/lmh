import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import ProtectedRoute from "./ProtectedRoute";
import NewProperty from "../pages/Admin/NewProperty";
import HomeAdmin from "../pages/Admin/Home";
import { Login } from "../pages/Admin";
import PropertyList from "@/pages/Admin/PropertyList";
import Properties from "@/pages/Properties";
import EditProperty from "@/pages/Admin/EditProperty/EditProperty";

const AppRoutes: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/services" element={<Services />} />
    <Route path="/properties" element={<Properties />} />

    {/* Redirecionamento raiz */}
    <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
    <Route path="/admin/login" element={<Login />} />
    {/* Todas as rotas protegidas */}
    <Route element={<ProtectedRoute />}>
      <Route path="/admin" element={<HomeAdmin />}>
        {/* Redirecionamento padrão dentro do admin */}
        <Route index element={<Navigate to="property-list" replace />} />

        {/* Sub-rotas principais */}
        <Route path="edit-property/:id" element={<EditProperty />} />
        <Route path="property-list" element={<PropertyList />} />
        <Route path="new-property" element={<NewProperty />} />
      </Route>
    </Route>
    {/* Fallback para rotas não encontradas */}
    <Route path="*" element={<Navigate to="/admin/login" replace />} />
  </Routes>
);

export default AppRoutes;
