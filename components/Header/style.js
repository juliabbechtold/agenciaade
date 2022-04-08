import styled from 'styled-components';

export const Navbar = styled.header`
  width: 100%;
  padding: 43px 20px;
  position: fixed;
  z-index: 1;
  background-color: ${(props) => (props.isOpen ? '#fff' : 'transparent')};

  @media (max-width: 1440px) {
    padding: 30px 0px;
  }

  @media (max-width: 750px) {
    padding: 20px 0px;
  }

  > .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 750px) {
      position: relative;
      padding: 0px;
    }

    @media (max-width: 600px) {
      min-height: 45px;
    }

    a {
      transition: all ease 0.5s;
      opacity: ${(props) => (props.isOpen ? '0' : '1')};

      @media (max-width: 800px) {
        opacity: 1;
      }

      img {
        width: 120px;
        height: auto;

        @media (max-width: 600px) {
          width: 100px;
        }
      }
    }

    nav {
      ul {
        display: flex;
        align-items: center;
        list-style: none;
        margin: 0px;

        li {
          display: flex;
          align-items: center;
          margin: 0 30px;

          @media (max-width: 1440px) {
            margin: 0 15px;
          }

          @media (max-width: 415px) {
            margin: 0 10px;
          }

          p {
            font-size: 18px;
            line-height: 12px;
            color: #797d8e;
            display: flex;
            align-items: center;
            cursor: pointer;

            @media (max-width: 1440px) {
              font-size: 14px;
            }

            @media (max-width: 415px) {
              font-size: 12px;
            }

            svg {
              margin-right: 13px;
            }
          }

          button {
            font-size: 18px;
            line-height: 12px;
            color: #797d8e;
            display: flex;
            align-items: center;

            @media (max-width: 1440px) {
              font-size: 14px;
            }

            @media (max-width: 600px) {
              position: relative;
              z-index: 1;
            }

            @media (max-width: 415px) {
              font-size: 12px;
            }

            :hover {
              p {
                opacity: 0;
              }

              .menu-box {
                height: ${(props) => (props.isOpen ? '18px' : '24px')};

                .menu-inner2 {
                  opacity: ${(props) => (props.isOpen ? '0' : '1')};
                }
              }
            }

            p {
              margin-right: 30px;
              transition: all ease 0.5s;

              @media (max-width: 750px) {
                margin-right: 15px;
              }
            }

            .menu-box {
              width: 51px;
              height: 18px;
              display: flex;
              justify-content: space-between;
              flex-direction: column;

              @media (max-width: 1440px) {
                width: 40px;
              }

              @media (max-width: 415px) {
                width: 30px;
              }

              > span {
                width: 100%;
                height: 2px;
                background-color: #797d8e;
              }

              .menu-inner {
                transform: ${(props) =>
                  props.isOpen ? 'rotate(45deg)' : 'rotate(0deg)'};

                top: ${(props) => (props.isOpen ? '5px' : 'unset')};
                position: relative;
                transition: all ease 0.5s;
              }

              .menu-inner2 {
                opacity: 0;
                transition: opacity ease 0.5s;
              }

              .menu-inner3 {
                transform: ${(props) =>
                  props.isOpen ? 'rotate(-45deg)' : 'rotate(0deg)'};
                top: ${(props) => (props.isOpen ? '-10px' : 'unset')};
                position: relative;
                transition: all ease 0.5s;
              }
            }
          }
        }

        .social {
          min-height: 45px;
          position: relative;

          @media (max-width: 1440px) {
            min-width: 40px;
          }

          @media (max-width: 600px) {
            position: unset;
            z-index: 0;
          }

          :hover {
            @media (max-width: 600px) {
              position: absolute;
              right: 0px;
              background-color: #fff;
              z-index: 2;
            }

            > p {
              position: absolute;
              opacity: 0;
            }

            .social-networks {
              position: relative;
              opacity: 1;
            }
          }

          > p {
            position: relative;
            opacity: 1;
            cursor: pointer;
            transition: all ease 0.5s;
          }

          .social-networks {
            display: flex;
            position: absolute;
            opacity: 0;
            right: 0px;
            transition: all ease 0.5s;

            p {
              font-weight: bold;
              margin-right: 7.5px;
            }

            a {
              font-size: 18px;
              line-height: 12px;
              color: #797d8e;
              font-weight: bold;
              width: 45px;
              height: 45px;
              margin: 0 7.5px;
              border: 2px solid #fff;
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 100%;
              transition: all ease 0.5s;
              opacity: 1;

              @media (max-width: 1440px) {
                font-size: 14px;
                width: 40px;
                height: 40px;
              }

              @media (max-width: 415px) {
                font-size: 12px;
              }

              @media (max-width: 375px) {
                width: 30px;
                height: 30px;
              }

              :hover {
                border: 2px solid #797d8e;
              }
            }
          }
        }
      }
    }
  }

  .menu-nav {
    position: ${(props) => (props.isOpen ? 'fixed' : 'absolute')};
    width: 100vw;
    height: calc(100vh - 135.8px);
    background-color: #fff;
    z-index: ${(props) => (props.isOpen ? '9' : '-1')};
    opacity: ${(props) => (props.isOpen ? '1' : '0')};
    left: 0px;
    top: 135.8px;
    transition: all ease 0.5s;
    overflow-y: scroll;
    padding: 0 20px;
    display: ${(props) => (props.isOpen ? 'inline-block' : 'none')};

    @media (max-width: 1440px) {
      height: calc(100vh - 109.8px);
      top: 109.8px;
    }

    @media (max-width: 600px) {
      height: calc(100vh - 85px);
      top: 84px;
    }

    .container {
      display: flex;

      @media (max-width: 800px) {
        flex-direction: column-reverse;
        padding-bottom: 100px;
      }

      .menu-infos {
        width: 50%;

        @media (max-width: 800px) {
          width: 100%;
        }

        .logo {
          @media (max-width: 1440px) {
            width: 215px;
            height: auto;
          }

          @media (max-width: 800px) {
            display: none;
          }
        }

        .telefone {
          margin: 80px 0px 20px 0px;

          @media (max-width: 1440px) {
            margin: 60px 0px 20px 0px;
          }

          @media (max-width: 650px) {
            margin: 40px 0px 20px 0px;
          }

          p {
            font-size: 18px;
            line-height: 22px;
            color: #0f111a;
            font-weight: bold;
            margin-bottom: 15px;

            @media (max-width: 1440px) {
              font-size: 14px;
              line-height: 18px;
            }
          }

          a {
            font-size: 52px;
            line-height: 55px;
            font-weight: 200;
            letter-spacing: 0px;
            color: #0f111a;

            @media (max-width: 1440px) {
              font-size: 42px;
              line-height: 45px;
            }

            @media (max-width: 650px) {
              font-size: 32px;
              line-height: 35px;
            }

            span {
              font-size: 32px;

              @media (max-width: 650px) {
                font-size: 22px;
              }
            }
          }
        }

        .whatsapp {
          padding: 40px 60px 40px 0px;
          border-top: 1px solid #797d8e;
          border-bottom: 1px solid #797d8e;
          width: fit-content;

          @media (max-width: 650px) {
            padding: 20px 30px 20px 0px;
            width: 100%;
          }

          a {
            background-color: #0cef75;
            font-size: 26px;
            line-height: 24px;
            color: #222535;
            font-weight: bold;
            padding: 20px 70px;
            display: flex;
            align-items: center;

            @media (max-width: 1440px) {
              font-size: 20px;
              line-height: 18px;
            }

            @media (max-width: 650px) {
              width: 100%;
              padding: 15px 0px;
              justify-content: center;
            }

            svg {
              font-size: 35px;
              margin-left: 12px;

              @media (max-width: 1440px) {
                font-size: 29px;
              }
            }
          }
        }

        .endereco {
          display: flex;
          flex-direction: column;
          margin: 30px 0px 40px 0px;
          font-size: 26px;
          line-height: 32px;
          font-weight: 200;
          color: #0f111a;
          max-width: 414px;

          @media (max-width: 1440px) {
            font-size: 20px;
            line-height: 26px;
          }

          @media (max-width: 650px) {
            font-size: 18px;
            line-height: 24px;
            margin: 30px 0px;
          }

          span {
            font-size: 18px;
            font-weight: bold;

            @media (max-width: 1440px) {
              font-size: 14px;
            }
          }
        }

        .email {
          font-size: 18px;
          line-height: 32px;
          color: #0f111a;

          @media (max-width: 1440px) {
            font-size: 14px;
            line-height: 28px;
          }

          span {
            font-weight: bold;
          }
        }
      }

      .menu-items {
        width: 50%;

        @media (max-width: 800px) {
          width: 100%;
        }

        ul {
          list-style: none;
          margin: 0px;

          @media (max-width: 800px) {
            padding: 0px;
          }

          li {
            margin: 30px 0px;

            @media (max-width: 650px) {
              margin: 15px 0px;
            }

            :hover {
              a {
                opacity: 1;

                :after {
                  opacity: 1;
                }
              }
            }

            a {
              font-size: 50px;
              line-height: 70px;
              color: #0f111a;
              font-weight: 200;
              opacity: 0.5;
              position: relative;
              display: flex;
              align-items: center;
              width: fit-content;
              transition: all ease 0.5s;

              @media (max-width: 1440px) {
                font-size: 35px;
                line-height: 55px;
              }

              @media (max-width: 650px) {
                font-size: 20px;
                line-height: 40px;
              }

              :after {
                content: '';
                position: absolute;
                width: 118px;
                height: 2px;
                background-color: #0f111a;
                transform: rotate(-45deg);
                transition: all ease 0.5s;
                opacity: 0;

                @media (max-width: 1440px) {
                  width: 100px;
                }

                @media (max-width: 650px) {
                  width: 60px;
                }
              }
            }
          }
        }
      }
    }
  }
`;
