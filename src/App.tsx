import { BrowserRouter as Router } from "react-router-dom";
import "./styles/global.css";
import AppRoutes from "./routes";
import { Footer, Nav } from "./sections";

function App() {
  return (
    <Router>
      <Nav />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
