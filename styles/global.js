import { createGlobalStyle } from "styled-components";
import "../node_modules/hamburgers/dist/hamburgers.css";
import "antd/dist/antd.css";

const GlobalStyle = createGlobalStyle`
  html,
  body, #__next {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    position: relative;
    scroll-behavior: smooth;
    height: 100%;
    font-family: 'Montserrat', sans-serif;
    background-color: #282424;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  button, input, textarea {
    :focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;
