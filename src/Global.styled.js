import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {

      // Bgs
      --gradient-bg-primary: linear-gradient(0deg, rgba(98, 0, 112, 0.882) 41%, rgba(171, 0, 173, 0.855) 100%);

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

  a,
  a:visited,
  a:active
  a:hover {
    color: inherit;
    font-family: "EB Garamond", Inter, Arial, serif;
    text-decoration: none;
  }  

  body {
    color: white;
  }

  h1,h2,h3 {
    font-family: "EB Garamond", Inter, Arial, serif;
    letter-spacing: 0.1em;
  }

  blockquote,
  p {
    color: #fafafa;
  }
`;
