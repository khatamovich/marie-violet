import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
      line-height: 1.5;
      font-family: "Inter", "Arial", sans-serif;
      font-weight: 400;
      font-synthesis: none;
      text-rendering: optimizeLegibility;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  }

  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  html, body, #root {
    height: 100%;
    background: black;
  }

  #root > div {
    height: inherit;
  }

  a,
  a:visited,
  a:active
  a:hover {
    color: inherit;
    font-family: "Lancelot", Inter, Arial, serif;
    text-decoration: none;
  }  

  body {
    color: white;
  }
`;
