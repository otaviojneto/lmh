import { BrowserRouter, useLocation } from "react-router-dom";
import { Toaster } from "./components/ui/sonner";
import { NavigationProvider } from "./providers/NavigationProvider";
import AppRoutes from "./routes";
import { Footer, Nav } from "./sections";
import "./styles/global.css";

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
      <NavigationProvider />
      <Layout />
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
