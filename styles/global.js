import { createGlobalStyle } from 'styled-components';
import '../node_modules/hamburgers/dist/hamburgers.css';
import 'antd/dist/antd.css';

const GlobalStyle = createGlobalStyle`
  @font-face {
      font-family: 'Helvetica Now Text';
      src: url('/assets/fonts/HelveticaNowText-Black.eot');
      src: local('Helvetica Now Text  Black'), local('HelveticaNowText-Black'),
          url('/assets/fonts/HelveticaNowText-Black.eot?#iefix') format('embedded-opentype'),
          url('/assets/fonts/HelveticaNowText-Black.woff2') format('woff2'),
          url('/assets/fonts/HelveticaNowText-Black.woff') format('woff'),
          url('/assets/fonts/HelveticaNowText-Black.ttf') format('truetype');
      font-weight: 900;
      font-style: normal;
  }

  @font-face {
      font-family: 'Helvetica Now Text';
      src: url('/assets/fonts/HelveticaNowText-Bold.eot');
      src: local('Helvetica Now Text  Bold'), local('HelveticaNowText-Bold'),
          url('/assets/fonts/HelveticaNowText-Bold.eot?#iefix') format('embedded-opentype'),
          url('/assets/fonts/HelveticaNowText-Bold.woff2') format('woff2'),
          url('/assets/fonts/HelveticaNowText-Bold.woff') format('woff'),
          url('/assets/fonts/HelveticaNowText-Bold.ttf') format('truetype');
      font-weight: bold;
      font-style: normal;
  }

  @font-face {
      font-family: 'Helvetica Now Text';
      src: url('/assets/fonts/HelveticaNowText-Thin.eot');
      src: local('Helvetica Now Text  Thin'), local('HelveticaNowText-Thin'),
          url('/assets/fonts/HelveticaNowText-Thin.eot?#iefix') format('embedded-opentype'),
          url('/assets/fonts/HelveticaNowText-Thin.woff2') format('woff2'),
          url('/assets/fonts/HelveticaNowText-Thin.woff') format('woff'),
          url('/assets/fonts/HelveticaNowText-Thin.ttf') format('truetype');
      font-weight: 100;
      font-style: normal;
  }

  @font-face {
      font-family: 'Helvetica Now Text';
      src: url('/assets/fonts/HelveticaNowText-ExtraLight.eot');
      src: local('Helvetica Now Text  Extra Light'), local('HelveticaNowText-ExtraLight'),
          url('/assets/fonts/HelveticaNowText-ExtraLight.eot?#iefix') format('embedded-opentype'),
          url('/assets/fonts/HelveticaNowText-ExtraLight.woff2') format('woff2'),
          url('/assets/fonts/HelveticaNowText-ExtraLight.woff') format('woff'),
          url('/assets/fonts/HelveticaNowText-ExtraLight.ttf') format('truetype');
      font-weight: 200;
      font-style: normal;
  }

  @font-face {
      font-family: 'Helvetica Now Text';
      src: url('/assets/fonts/HelveticaNowText-Light.eot');
      src: local('Helvetica Now Text  Light'), local('HelveticaNowText-Light'),
          url('/assets/fonts/HelveticaNowText-Light.eot?#iefix') format('embedded-opentype'),
          url('/assets/fonts/HelveticaNowText-Light.woff2') format('woff2'),
          url('/assets/fonts/HelveticaNowText-Light.woff') format('woff'),
          url('/assets/fonts/HelveticaNowText-Light.ttf') format('truetype');
      font-weight: 300;
      font-style: normal;
  }

  @font-face {
      font-family: 'Helvetica Now Text';
      src: url('/assets/fonts/HelveticaNowText-ExtraBold.eot');
      src: local('Helvetica Now Text  Extra Bold'), local('HelveticaNowText-ExtraBold'),
          url('/assets/fonts/HelveticaNowText-ExtraBold.eot?#iefix') format('embedded-opentype'),
          url('/assets/fonts/HelveticaNowText-ExtraBold.woff2') format('woff2'),
          url('/assets/fonts/HelveticaNowText-ExtraBold.woff') format('woff'),
          url('/assets/fonts/HelveticaNowText-ExtraBold.ttf') format('truetype');
      font-weight: 800;
      font-style: normal;
  }

  @font-face {
      font-family: 'Helvetica Now Text';
      src: url('/assets/fonts/HelveticaNowText-Regular.eot');
      src: local('Helvetica Now Text  Regular'), local('HelveticaNowText-Regular'),
          url('/assets/fonts/HelveticaNowText-Regular.eot?#iefix') format('embedded-opentype'),
          url('/assets/fonts/HelveticaNowText-Regular.woff2') format('woff2'),
          url('/assets/fonts/HelveticaNowText-Regular.woff') format('woff'),
          url('/assets/fonts/HelveticaNowText-Regular.ttf') format('truetype');
      font-weight: normal;
      font-style: normal;
  }

  @font-face {
      font-family: 'Helvetica Now Text';
      src: url('/assets/fonts/HelveticaNowText-Medium.eot');
      src: local('Helvetica Now Text  Medium'), local('HelveticaNowText-Medium'),
          url('/assets/fonts/HelveticaNowText-Medium.eot?#iefix') format('embedded-opentype'),
          url('/assets/fonts/HelveticaNowText-Medium.woff2') format('woff2'),
          url('/assets/fonts/HelveticaNowText-Medium.woff') format('woff'),
          url('/assets/fonts/HelveticaNowText-Medium.ttf') format('truetype');
      font-weight: 500;
      font-style: normal;
  }

   :root{
    --primary-white-color: #ccd5e2;
    --secondary-white-color: #abb7c7;
    --primary-dark-color: #222535;
    --secondary-dark-color: #797d8e;
  }

  html,
  body, #__next {
    padding: 0;
    margin: 0;
    overflow-x: hidden;
    position: relative;
    scroll-behavior: smooth;
    height: 100%;
    font-family: 'Helvetica Now Text';
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    font-family: 'Helvetica Now Text';
  }

  button, input, textarea {
    :focus {
      outline: none;
    }
  }

  .container {
    max-width: 1660px;
    margin: 0 auto;
    padding: 0 20px;

    @media (max-width: 1660px) {
      max-width: 1240px;
    }
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  p {
    margin: 0;
  }

  .link-arrow {
    display: flex;
    align-items: center;
    width: fit-content;

    :hover {
      div {
        .inner {
          transform: rotate(-25deg);
          top: 1px;
        }

        .inner2 {
          transform: rotate(25deg);
          top: -1px;
        }
      }
    }

    div {
      margin-left: 25px;

      .inner,
      .inner2 {
        width: 2px;
        height: 13px;
        background-color: #000;
        transition: all ease 0.5s;
        position: relative;
      }
    }
  }

  .-small {
    font-size: 18px;
    line-height: 24px;

    @media (max-width: 1440px) {
      font-size: 14px;
      line-height: 20px;
    }
  }

  .-medium {
    font-size: 50px;
    line-height: 70px;

    @media (max-width: 1440px) {
      font-size: 35px;
      line-height: 55px;
    }

    @media (max-width: 650px) {
      font-size: 30px;
      line-height: 40px;
    }

    @media (max-width: 450px) {
      font-size: 25px;
      line-height: 35px;
    }
  }

  .-bold {
    font-weight: bold;
  }

  .-light {
    font-weight: 300;
  }

  .-white {
    color: var(--primary-white-color);
  }

  .-white-2 {
    color: var(--secondary-white-color);
  }

  .-dark {
    color: var(--primary-dark-color);
  }

  .-spacing-6 {
    letter-spacing: 6px;
  }

  .arrow-btn {
    font-size: 18px;
    line-height: 35px;
    color: #c9cde0;
    display: flex;
    align-items: center;

    @media (max-width: 1440px) {
      font-size: 14px;
      line-height: 31px;
    }

    :hover {
      div {
        transform: scale(0.9);
        border: 2px solid #797d8e;

        svg {
          fill: #797d8e;
          width: 34px;
        }
      }
    }

    div {
      width: 54px;
      height: 54px;
      border: 2px solid #c9cde0;
      border-radius: 100%;
      margin-left: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all ease 0.5s;

      @media (max-width: 1440px) {
        width: 44px;
        height: 44px;
      }

      svg {
        width: 24px;
        height: auto;
        transition: all ease 0.5s;
      }
    }
  }
`;

export default GlobalStyle;
