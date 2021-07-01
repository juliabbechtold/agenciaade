import styled from "styled-components";

export const Container = styled.header`
  max-width: 1920px;
  width: 100%;
  position: relative;
  top: 0;
  .MenuWeb {
    z-index: 99;
    position: fixed;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.9);
    position: fixed;
    width: 100%;
    padding: 20px 15%;
    justify-content: space-evenly;
    a {
      display: flex;
      div {
        img {
          object-fit: contain;
        }
      }
    }
    nav {
      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;

        li {
          list-style: none;
          margin: 0 15px;
          a {
            color: #ffffff;
            display: inline-block;
            position: relative;
          }
          a:after {
            content: "";
            display: flex;
            height: 1px;
            border-radius: 10px;
            left: 50%;
            position: absolute;
            background: #fff;
            transition: width 0.3s ease 0s, left 0.3s ease 0s;
            width: 0;
          }
          a:hover:after {
            width: 100%;
            left: 0;
          }
        }
      }
    }
    .whats-icon {
      background: #24e3a1;
      border-radius: 100%;
      padding: 5px;
      transition: transform 0.7s;
      .AiOutlineWhatsApp {
        font-size: 24px;
        color: #000;
        transition: 1s;
      }
      :hover {
        transform: scale(1.5);
        .AiOutlineWhatsApp {
          color: #fff;
        }
      }
    }
    @media (max-width: 900px) {
      display: none;
    }
  }
  .MenuMobile {
    border-bottom: 1px solid #e3e3e3;
    display: none;
    z-index: 99;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #000;
    padding: 0 20px;

    .logo {
      display: flex;
      justify-content: space-between;
      a {
        display: flex;
        justify-content: space-between;
        align-items: center;
        img {
          object-fit: contain;
          width: 130px;
          height: 50px;
        }
      }
      .hamburger-react {
        margin: 10px;
        position: fixed;
        color: #fff;
      }
    }
    .Open {
      transform: translateY(-120%);
      position: fixed;
      @media (max-width: 500px) {
        transform: translateY(-300%);
      }
    }
    .Openmobile {
      transform: translateY(0%);
      transition: all ease 0.7s;
      height: auto;
      width: 100%;
      background: rgba(0, 0, 0, 0.8);
      padding-bottom: 25px;
      border-bottom: 1px solid #e3e3e3;
      position: absolute;
      left: 0;
      padding: 30px 0;
      nav ul {
        display: flex;
        flex-direction: column;
        padding: unset;
        margin: unset;
        li {
          flex-direction: column;
          display: flex;
          list-style: none;
          margin: auto;
          a {
            font-size: 16px;
            padding: 10px;
            color: #fff;
            opacity: 1;
            text-align: left;
            text-decoration: none;
            letter-spacing: 0px;
            display: inline-block;
            position: relative;
            font-weight: bold;
          }
        }
      }
    }
    @media (max-width: 900px) {
      display: inherit;
    }
  }
`;
