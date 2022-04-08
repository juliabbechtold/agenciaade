import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 0;
`;

export const Banner = styled.section`
  height: 100vh;
  background-color: #0f111a;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 920px) {
    min-height: unset;
    height: fit-content;
    padding-top: 200px;
  }

  @media (max-width: 650px) {
    padding-top: 150px;
  }

  .container {
    width: 100%;
    max-width: 1150px;

    @media (max-width: 1440px) {
      max-width: 815px;
    }
  }

  .text {
    width: 100%;
    margin-bottom: 50px;

    @media (max-width: 1440px) {
      margin-bottom: 70px;
    }

    @media (max-width: 920px) {
      margin-bottom: 100px;
    }

    h3 {
      color: #fff;
      margin-top: 25px;
    }
  }

  .arrow-btn {
    position: absolute;
    bottom: 40px;
    color: var(--secondary-dark-color);

    @media (max-width: 920px) {
      position: relative;
      bottom: unset;
      margin-bottom: 40px;
    }

    > div {
      margin: 0 30px 0 0%;
      border-color: var(--secondary-dark-color);

      svg {
        transform: rotate(90deg);
        fill: var(--secondary-dark-color);
      }
    }
  }
`;

export const Culture = styled.section`
  background-color: #0f111a;
  padding: 280px 0 135px 0;

  @media (max-width: 1440px) {
    padding: 240px 0 120px 0;
  }

  @media (max-width: 650px) {
    padding: 160px 0 120px 0;
  }

  .container {
    width: 100%;
    max-width: 1255px;

    @media (max-width: 1440px) {
      max-width: 890px;
    }
  }

  .text {
    width: 100%;

    h3 {
      color: #fff;
      margin-top: 25px;
    }
  }

  .adeptos {
    display: block;
    margin-top: 245px;

    @media (max-width: 1440px) {
      margin-top: 200px;
    }

    @media (max-width: 650px) {
      margin-top: 100px;
    }

    > div {
      display: grid;
      grid-auto-columns: 370px;
      grid-auto-flow: column;
      grid-gap: 88px;
      padding: 0 130px;
      overflow-x: scroll;

      @media (max-width: 1440px) {
        padding: 0 60px;
      }

      @media (max-width: 920px) {
        padding: 0;
        grid-gap: 40px;
      }

      ::-webkit-scrollbar {
        width: 12px; /* width of the entire scrollbar */
      }

      ::-webkit-scrollbar-track {
        background: #0f111a; /* color of the tracking area */
      }

      ::-webkit-scrollbar-thumb {
        background-color: #0f111a; /* color of the scroll thumb */
        border-radius: 20px; /* roundness of the scroll thumb */
        border: 3px solid #0f111a; /* creates padding around scroll thumb */
      }

      > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;

        :hover {
          .arroba {
            opacity: 1;
          }

          .img {
            img {
              filter: grayscale(0%);
            }
          }
        }

        .img {
          width: 100%;
          position: relative;
          margin-bottom: 20px;
          max-height: 350px;

          img {
            filter: grayscale(100%);
            transition: all ease 0.5s;
            max-height: 350px;
          }

          .bg {
            position: absolute;
            width: 100%;
            height: 350px;
            background: linear-gradient(to top, #0f111a, transparent);
            bottom: 0px;
            z-index: 1;
          }
        }

        p {
          margin: 0px;
          text-align: center;
        }

        .nome,
        .arroba {
          color: #fff;
          margin-bottom: 10px;
          transition: all ease 0.5s;
          position: relative;
        }

        .arroba {
          position: absolute;
          opacity: 0;
          transition: all ease 0.5s;
          width: 100%;
          background-color: #0f111a;
          bottom: 23px;
        }

        .cargo {
          color: var(--secondary-dark-color);
        }
      }
    }
  }

  .arrow-btn {
    color: var(--secondary-dark-color);
    margin-top: 60px;

    > div {
      margin: 0 30px 0 0%;
      border-color: var(--secondary-dark-color);
      width: 80px;
      height: 80px;
      font-size: 12px;
    }
  }
`;

export const Visao = styled.section`
  padding: 200px 0px 150px 0px;

  @media (max-width: 1440px) {
    padding: 150px 0px 100px 0px;
  }

  @media (max-width: 750px) {
    padding: 100px 0px 60px 0px;
  }

  .text {
    max-width: 1105px;
    margin-bottom: 210px;

    @media (max-width: 1440px) {
      max-width: 850px;
      margin-bottom: 160px;
    }

    @media (max-width: 750px) {
      margin-bottom: 100px;
    }

    h2,
    h3 {
      color: #0f111a;
    }

    h3 {
      margin-top: 25px;
    }
  }

  .galeria {
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
      color: #0f111a;
      text-align: center;
      padding: 0 20px;
    }

    .index {
      font-size: 22px;
      line-height: 24px;
      color: #0f111a;

      @media (max-width: 1440px) {
        font-size: 18px;
        line-height: 20px;
      }
    }
  }

  .carousel {
    width: fit-content;
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 854px;
    margin: 50px 0 65px 0px;

    @media (max-width: 1440px) {
      max-width: 754px;
      margin: 30px 0 45px 0;
    }

    @media (max-width: 450px) {
      margin: 20px 0 35px 0;
      max-width: 100%;
      left: -12px;
      position: relative;
    }

    .ant-carousel {
      width: 647px;

      @media (max-width: 1440px) {
        width: 547px;
      }

      @media (max-width: 750px) {
        width: calc(100% - 120px);
      }
    }

    .prev-btn {
      svg {
        transform: rotate(180deg);
      }
    }

    .arrow-btn {
      > div {
        border-color: #0f111a;
        margin: 0px;
      }

      svg {
        fill: #0f111a;
      }
    }

    .slide {
      height: 1021px;
      padding: 33px;
      border: 2px solid #0f111a;

      @media (max-width: 1440px) {
        height: 821px;
      }

      @media (max-width: 750px) {
        padding: 15px;
      }

      @media (max-width: 750px) {
        height: 500px;
      }

      @media (max-width: 450px) {
        height: 400px;
      }

      > div {
        width: 580px;
        height: 955px;
        left: 33px !important;
        top: 33px !important;

        @media (max-width: 1440px) {
          width: 480px;
          height: 755px;
        }

        @media (max-width: 750px) {
          left: 15px !important;
          top: 15px !important;
          width: calc(100% - 30px);
          height: calc(100% - 30px);
        }

        img {
          object-fit: cover;
        }
      }
    }
  }
`;

export const Services = styled.section`
  margin: 150px auto 300px auto;

  @media (max-width: 790px) {
    padding: 0 20px;
  }

  @media (max-width: 450px) {
    margin: 100px auto 150px auto;
  }

  h2,
  h3 {
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;

    @media (max-width: 1440px) {
      max-width: 750px;
    }
  }

  > p {
    font-size: 26px;
    line-height: 42px;
    color: #0f111a;
    max-width: 1100px;
    margin: 140px auto 55px auto;
    padding-right: 100px;
    width: 100%;

    @media (max-width: 1440px) {
      max-width: 750px;
      font-size: 22px;
      line-height: 38px;
      margin: 100px auto 55px auto;
    }

    @media (max-width: 790px) {
      padding-right: 0px;
    }

    @media (max-width: 450px) {
      font-size: 16px;
      line-height: 28px;
      margin: 60px auto 0px auto;
    }
  }

  > div {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 1024px) {
      justify-content: center;
    }
  }

  ul {
    margin: 0;
    list-style: none;
    max-width: 1510px;
    width: 100%;
    padding: 0 55px;

    @media (max-width: 1500px) {
      padding: 0 20px;
    }

    @media (max-width: 1440px) {
      max-width: 1150px;
    }

    @media (max-width: 1024px) {
      max-width: 750px;
      padding: 0;
    }

    li {
      position: relative;
      margin: 100px 0;

      @media (max-width: 450px) {
        margin: 60px 0;
      }

      > a {
        display: flex;
        justify-content: space-between;
        align-items: center;

        :hover {
          .galery {
            opacity: 1;
          }

          p {
            color: #0f111a;
          }
        }
      }

      h2 {
        font-size: 32px;
        color: #0f111a;
        margin-bottom: 20px;

        @media (max-width: 1440px) {
          font-size: 22px;
        }
      }

      p {
        font-size: 18px;
        line-height: 26px;
        color: var(--secondary-white-color);
        max-width: 555px;
        padding-left: 30px;
        transition: all ease 0.5s;

        @media (max-width: 1440px) {
          font-size: 14px;
          line-height: 22px;
          max-width: 385px;
          padding-left: 20px;
        }
      }

      .galery {
        display: grid;
        grid-template-columns: repeat(2, 360px);
        grid-auto-rows: 260px;
        grid-gap: 35px;
        opacity: 0;
        transition: all ease 0.5s;

        @media (max-width: 1440px) {
          grid-template-columns: repeat(2, 290px);
          grid-auto-rows: 190px;
          grid-gap: 25px;
        }

        @media (max-width: 1024px) {
          display: none;
        }

        > div {
          position: relative;

          img {
            object-fit: cover;
          }
        }
      }
    }
  }

  > a {
    color: #0f111a;
    max-width: 1100px;
    margin: 0 auto;
    width: 100%;

    @media (max-width: 1500px) {
      padding: 0 20px;
    }

    @media (max-width: 1440px) {
      max-width: 1150px;
    }

    @media (max-width: 1024px) {
      max-width: 750px;
      padding: 0;
    }

    strong {
      margin-left: 4px;
    }

    .inner,
    .inner2 {
      background-color: #0f111a;
    }
  }
`;
