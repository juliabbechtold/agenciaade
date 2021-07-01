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
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  h1{
    font-size: 24px;
    font-weight: bold;
  }
  h2{
    font-size: 14px;
    font-weight: bold;
  }
  * {
    box-sizing: border-box;
  }

  button, input, textarea {
    :focus {
      outline: none;
    }
  }
`;

export default GlobalStyle;
