import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    margin: 0;
    outline: none !important;
    padding: 0;
  }

  body,
  html {
    background-color: #f5f5f5;
    color: #222;
    font-size: 16px;
    letter-spacing: 0.5px;
    line-height: 24px;
    -webkit-font-smoothing: antialiased;
  }

  ul {
    list-style: none;
  }

  a, tcxspan {
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  textarea {
    resize: none;
  }
`;

export default GlobalStyle;
