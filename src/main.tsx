import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import App from "./App";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#3A4858", // Ex: #2196F3
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <MuiThemeProvider theme={muiTheme}>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <App />
      </StrictMode>
    </ThemeProvider>
  </MuiThemeProvider>
);
