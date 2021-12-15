import styled from "styled-components";

export const Navbar = styled.header`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: relative;
  background-color: #282424;
  padding: 60px 55px 100px 55px;

  @media (max-width: 1440px) {
    padding: 50px 55px 80px 55px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px 40px 20px;
  }

  @media (max-width: 425px) {
    flex-direction: column-reverse;
    align-items: flex-start;
  }

  > div {
    display: flex;
    align-items: flex-end;
  }

  .social {
    @media (max-width: 425px) {
      align-self: flex-end;
      margin-bottom: 15px;
    }

    a {
      font-size: 30px;
      color: #fff;
      margin: 0px 10px;
      transition: all ease 0.5s;
      display: flex;
      align-items: flex-end;

      @media (max-width: 1440px) {
        font-size: 26px;
      }

      @media (max-width: 768px) {
        font-size: 22px;
      }

      :hover {
        transform: scale(1.1);
      }
    }
  }

  h1 {
    color: #fff;
    margin: 0px;
    font-size: 38px;
    line-height: 42px;
    margin-right: 30px;

    @media (max-width: 1440px) {
      font-size: 34px;
      line-height: 38px;
    }

    @media (max-width: 768px) {
      font-size: 26px;
      line-height: 30px;
      margin-right: 10px;
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
        margin: 0 15px;

        a {
          font-family: "Montserrat", sans-serif;
          color: #fff;
          font-size: 16px;
          line-height: 20px;
          padding-bottom: 5px;
          display: flex;
          flex-direction: column;
          align-items: center;

          @media (max-width: 1440px) {
            font-size: 14px;
            line-height: 18px;
          }

          @media (max-width: 768px) {
            font-size: 12px;
            line-height: 16px;
          }

          :after {
            content: "";
            width: 0%;
            position: relative;
            height: 1px;
            background-color: #fff;
            transition: all ease 0.5s;
          }

          :hover:after {
            width: 100%;
          }
        }
      }
    }
  }

  .hamburger {
    display: none;
  }
`;
