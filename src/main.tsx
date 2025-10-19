import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import App from "./App";
import { theme } from "./theme";
import { ThemeProvider } from "styled-components";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#3A4858", // Ex: #2196F3
    },
  },
});
const queryClient = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <MuiThemeProvider theme={muiTheme}>
    <ThemeProvider theme={theme}>
      <StrictMode>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </StrictMode>
    </ThemeProvider>
  </MuiThemeProvider>
);
