import { BrowserRouter, useLocation } from "react-router-dom";
import "./styles/global.css";
import AppRoutes from "./routes";
import { Footer, Nav } from "./sections";
import { Toaster } from "./components/ui/sonner";

function Layout() {
  const location = useLocation();

  // Oculta Nav e Footer nas rotas do admin
  const hideLayout = location.pathname.startsWith("/admin");

  return (
    <>
      {!hideLayout && <Nav />}
      <AppRoutes />
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
