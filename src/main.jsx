import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { GlobalStyle } from "./Global.styled";
import { I18nProvider } from "./store/I18nProvider";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  <StrictMode>
    <BrowserRouter>
      <I18nProvider>
        <App />
        <GlobalStyle />
      </I18nProvider>
    </BrowserRouter>
  </StrictMode>,
);
