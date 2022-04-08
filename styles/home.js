import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  z-index: 0;
`;

export const Banner = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 780px;

  @media (max-width: 920px) {
    min-height: unset;
    height: fit-content;
    margin-top: 200px;
  }

  @media (max-width: 650px) {
    margin-top: 150px;
  }

  .text {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    margin-bottom: 50px;

    @media (max-width: 1440px) {
      margin-bottom: 70px;
    }

    @media (max-width: 960px) {
      flex-direction: column;
      justify-content: center;
      width: fit-content;
    }

    @media (max-width: 920px) {
      margin-bottom: 100px;
    }

    > p {
      margin-right: 280px;
      font-size: 20px;
      line-height: 24px;
      color: var(--secondary-dark-color);
      margin-top: 45px;

      @media (max-width: 1660px) {
        margin-right: 200px;
      }

      @media (max-width: 1440px) {
        font-size: 16px;
        line-height: 20px;
        margin-top: 0px;
      }

      @media (max-width: 1050px) {
        margin-right: 120px;
      }

      @media (max-width: 960px) {
        margin-bottom: 80px;
      }

      @media (max-width: 650px) {
        font-size: 14px;
        line-height: 18px;
        margin-bottom: 50px;
      }
    }

    div {
      h1 {
        font-size: 100px;
        line-height: 90px;
        color: var(--secondary-dark-color);
        margin-bottom: 60px;

        @media (max-width: 1660px) {
          font-size: 80px;
          line-height: 70px;
        }

        @media (max-width: 1440px) {
          font-size: 70px;
          line-height: 60px;
          margin-bottom: 40px;
        }

        @media (max-width: 650px) {
          font-size: 50px;
          line-height: 40px;
        }

        @media (max-width: 476px) {
          font-size: 40px;
          line-height: 35px;
        }

        @media (max-width: 390px) {
          font-size: 35px;
        }
      }

      p {
        font-size: 26px;
        line-height: 42px;
        color: var(--secondary-white-color);
        max-width: 980px;

        @media (max-width: 1660px) {
          font-size: 22px;
          line-height: 38px;
          max-width: 840px;
        }

        @media (max-width: 1440px) {
          font-size: 18px;
          line-height: 30px;
          max-width: 690px;
        }

        @media (max-width: 650px) {
          font-size: 16px;
          line-height: 28px;
        }

        @media (max-width: 476px) {
          font-size: 14px;
          line-height: 26px;
        }
      }
    }
  }

  .button {
    bottom: 75px;
    position: absolute;

    @media (max-width: 1440px) {
      bottom: 50px;
    }

    @media (max-width: 920px) {
      position: relative;
      bottom: unset;
      margin-bottom: 40px;
    }

    .arrow-btn {
      display: flex;
      flex-direction: column;

      > div {
        margin: 0px 0px 20px 0px;
        border-color: var(--secondary-dark-color);

        svg {
          transform: rotate(90deg);
          fill: var(--secondary-dark-color);
        }
      }

      p {
        color: var(--secondary-dark-color);
      }
    }
  }
`;

export const Works = styled.section`
  margin: 180px auto 145px auto;

  @media (max-width: 750px) {
    margin: 130px auto 95px auto;
  }

  @media (max-width: 920px) {
    margin: 0px auto 95px auto;
  }

  .content {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 120px;
    grid-row-gap: 200px;

    @media (max-width: 1024px) {
      grid-column-gap: 80px;
    }

    @media (max-width: 920px) {
      grid-template-columns: 100%;
      max-width: 750px;
      margin: 0 auto;
      grid-row-gap: 120px;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;

      :before {
        content: '';
        position: absolute;
        width: 2px;
        height: 670px;
        background-color: var(--secondary-dark-color);
        top: -365px;

        @media (max-width: 1660px) {
          height: 550px;
        }

        @media (max-width: 1440px) {
          top: -315px;
          height: 520px;
        }

        @media (max-width: 920px) {
          position: relative;
          top: unset;
          margin-bottom: 80px;
          height: 250px;
        }
      }

      h2 {
        font-size: 26px;
        line-height: 24px;
        color: #222535;
        margin-bottom: 20px;

        @media (max-width: 1440px) {
          font-size: 22px;
          line-height: 20px;
        }

        @media (max-width: 750px) {
          font-size: 18px;
          line-height: 16px;
        }
      }

      > a {
        color: var(--secondary-dark-color);

        strong {
          margin-left: 4px;
        }

        .inner,
        .inner2 {
          background-color: var(--secondary-dark-color);
        }
      }
    }

    > a {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      color: #222535;

      :hover {
        color: #222535;

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

      > p {
        text-transform: uppercase;
        font-weight: 300;

        @media (max-width: 450px) {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        span {
          margin: 0 20px;

          @media (max-width: 450px) {
            margin: 0px 0px 10px 0px;
          }
        }
      }

      .img {
        width: 100%;
        height: 720px;
        position: relative;
        margin: 45px 0px;
        background-color: var(--secondary-dark-color);

        @media (max-width: 1660px) {
          height: 510px;
        }

        @media (max-width: 1024px) {
          height: 422px;
        }

        @media (max-width: 920px) {
          height: 720px;
          margin: 30px 0px;
        }

        @media (max-width: 580px) {
          height: 510px;
        }

        @media (max-width: 450px) {
          height: 380px;
        }

        img {
          object-fit: cover;
        }
      }
    }
  }
`;

export const Projects = styled.section`
  background-color: #0f111a;
  padding-left: 8%;
  padding: 260px 0px;

  @media (max-width: 1440px) {
    padding: 180px 0px;
  }

  @media (max-width: 750px) {
    padding: 120px 0px;
  }

  h2 {
    text-align: center;
    padding: 0 20px;
  }

  .button {
    margin: 75px auto;
    max-width: 1660px;
    padding: 0 20px;
    width: 100%;

    @media (max-width: 1660px) {
      max-width: 1240px;
    }

    @media (max-width: 1440px) {
      margin: 55px auto;
    }

    @media (max-width: 750px) {
      margin: 35px auto;
    }

    > div {
      margin-left: auto;
      width: fit-content;
    }
  }

  .scroll {
    display: block;

    .projects {
      display: grid;
      grid-template-columns: repeat(8, 350px);
      grid-gap: 75px;
      overflow-x: scroll;
      padding: 0 8%;

      @media (max-width: 1440px) {
        grid-template-columns: repeat(8, 300px);
        grid-gap: 55px;
      }

      @media (max-width: 1280px) {
        padding: 0 20px;
        grid-gap: 35px;
      }

      @media (max-width: 750px) {
        grid-template-columns: repeat(8, 250px);
        padding-bottom: 66px;
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

      > a {
        width: 100%;
        height: 100%;

        .img {
          width: 100%;
          height: 470px;
          background: linear-gradient(to bottom right, #1a1c29, #0f111a);
          animation-duration: 1s;
          animation-name: loading;
          animation-iteration-count: infinite;
          transition: background ease 0.5s;

          @keyframes loading {
            0% {
              background: linear-gradient(to bottom right, #1a1c29, #0f111a);
            }

            25% {
              background: linear-gradient(
                to bottom right,
                #0f111a,
                #1a1c29,
                #0f111a
              );
            }

            50% {
              background: linear-gradient(to bottom right, #0f111a, #1a1c29);
            }

            75% {
              background: linear-gradient(
                to bottom right,
                #0f111a,
                #1a1c29,
                #0f111a
              );
            }

            100% {
              background: linear-gradient(to bottom right, #1a1c29, #0f111a);
            }
          }

          @media (max-width: 1440px) {
            height: 420px;
          }

          @media (max-width: 750px) {
            height: 370px;
          }

          > div {
            width: 100%;
            height: 100%;

            img {
              object-fit: cover;
            }
          }
        }

        .ano {
          margin-top: 20px;
        }

        p {
          font-size: 18px;
          line-height: 22px;

          @media (max-width: 1440px) {
            font-size: 14px;
          }
        }

        h3 {
          font-size: 26px;
          line-height: 30px;
          margin: 25px 0px 10px 0px;

          @media (max-width: 1440px) {
            font-size: 22px;
          }

          @media (max-width: 750px) {
            font-size: 18px;
            margin: 15px 0px 5px 0px;
          }
        }
      }

      .seeAll {
        background-color: #1a1c29;
        height: 470px;
        display: flex;
        align-items: center;
        padding: 0 0 0 35px;
        font-size: 40px;
        line-height: 50px;
        color: #fff;

        @media (max-width: 1440px) {
          height: 420px;
          font-size: 30px;
          line-height: 40px;
        }

        @media (max-width: 750px) {
          font-size: 24px;
          line-height: 34px;
          height: 370px;
        }
      }
    }
  }
  .scrollBar {
    height: 8px;
    width: 430px;
    border-radius: 8px;
    background-color: #545869;
    position: relative;
    margin: 120px auto 0 auto;

    @media (max-width: 1440px) {
      margin: 90px auto 0 auto;
    }

    @media (max-width: 750px) {
      margin: 0px auto;
      top: -6px;
    }

    @media (max-width: 470px) {
      max-width: calc(100% - 40px);
    }

    span {
      position: absolute;
      left: 0px;
      top: 0px;
      background-color: #ccd5e2;
      z-index: 1;
      height: 8px;
      border-radius: 8px;
      transition: all ease 0.2s;

      @media (max-width: 470px) {
        max-width: 100%;
      }
    }
  }
`;

export const Cases = styled.section`
  position: relative;
  padding: 0px 20px 100px 20px;

  @media (max-width: 700px) {
    padding: 0px 20px 20px 20px;
  }

  .bg {
    width: 100%;
    height: 52%;
    position: absolute;
    bottom: 0px;
    left: 0px;
    background-color: #0f111a;
    z-index: -1;
  }

  > div {
    background-color: #f2f4f7;
    padding: 170px 135px 210px 135px;

    @media (max-width: 1440px) {
      padding: 120px 100px 160px 100px;
    }

    @media (max-width: 1200px) {
      padding: 80px 20px 120px 20px;
    }

    @media (max-width: 700px) {
      padding: 80px 20px 60px 20px;
    }

    > h2 {
      text-align: center;
    }

    > div {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-auto-rows: repeat(7, 120px);
      grid-gap: 100px;
      margin-top: 145px;

      @media (max-width: 1440px) {
        grid-gap: 80px;
        margin-top: 120px;
      }

      @media (max-width: 1200px) {
        grid-gap: 30px;
      }

      @media (max-width: 950px) {
        grid-template-columns: repeat(2, 1fr);
      }

      @media (max-width: 700px) {
        grid-template-columns: 100%;
        grid-auto-rows: unset;
        margin-top: 80px;
      }

      > div:nth-child(1) {
        grid-area: 1 / 1 / span 4 / span 1;

        @media (max-width: 700px) {
          grid-area: unset;
        }
      }

      > div:nth-child(2) {
        grid-area: 1 / 2 / span 3 / span 1;

        @media (max-width: 700px) {
          grid-area: unset;
        }
      }

      > div:nth-child(3) {
        grid-area: 1 / 3 / span 4 / span 1;

        @media (max-width: 950px) {
          grid-area: 4 / 2 / span 4 / span 1;
        }

        @media (max-width: 700px) {
          grid-area: unset;
        }
      }

      > div:nth-child(4) {
        grid-area: 5 / 1 / span 3 / span 1;

        @media (max-width: 950px) {
          grid-area: 5 / 1 / span 3 / span 1;
        }

        @media (max-width: 700px) {
          grid-area: unset;
        }
      }

      > div:nth-child(5) {
        grid-area: 4 / 2 / span 4 / span 1;

        @media (max-width: 950px) {
          grid-area: 8 / 1 / span 4 / span 1;
        }

        @media (max-width: 700px) {
          grid-area: unset;
        }
      }

      > div:nth-child(6) {
        grid-area: 5 / 3 / span 3 / span 1;

        @media (max-width: 950px) {
          grid-area: 8 / 2 / span 3 / span 1;
        }

        @media (max-width: 700px) {
          grid-area: unset;
        }
      }

      > div {
        background-color: #fff;
        height: 100%;
        width: 100%;
        border: 1px solid #dfe4eb;
        padding: 60px 50px;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @media (max-width: 1440px) {
          padding: 40px 30px;
        }

        @media (max-width: 700px) {
          padding: 25px 15px;
        }

        p {
          line-height: 26px;
          font-weight: 200;

          @media (max-width: 1440px) {
            line-height: 22px;
          }
        }

        h3 {
          margin: 50px 0 40px 0;

          @media (max-width: 700px) {
            margin: 40px 0 30px 0;
          }
        }

        > div {
          width: 130px;
          height: 130px;
          overflow: hidden;
          border-radius: 100%;

          @media (max-width: 1440px) {
            width: 100px;
            height: 100px;
          }

          > div {
            width: 100%;
            height: 100%;

            img {
              object-fit: cover;
            }
          }
        }
      }
    }
  }
`;

export const Essence = styled.section`
  background-color: #0f111a;
  padding: 292px 0px;

  @media (max-width: 1440px) {
    padding: 230px 0px;
  }

  @media (max-width: 1024px) {
    padding: 150px 0px;
  }

  @media (max-width: 750px) {
    padding: 100px 0px;
  }

  > div {
    display: flex;
    justify-content: center;
    align-items: flex-start;

    @media (max-width: 1024px) {
      flex-direction: column;
      align-items: center;
    }

    h2 {
      position: relative;
      top: 10px;

      @media (max-width: 1024px) {
        width: 100%;
        max-width: 685px;
      }
    }

    .text {
      max-width: 745px;
      margin-left: 115px;

      @media (max-width: 1440px) {
        max-width: 685px;
        margin-left: 85px;
      }

      @media (max-width: 1024px) {
        margin-left: 0;
        margin-top: 60px;
      }
    }

    p {
      font-size: 26px;
      line-height: 42px;
      font-weight: 200;

      @media (max-width: 1440px) {
        font-size: 24px;
        line-height: 38px;
      }

      @media (max-width: 750px) {
        font-size: 20px;
        line-height: 34px;
      }
    }

    a {
      margin-top: 85px;

      @media (max-width: 750px) {
        margin-top: 55px;
      }

      :hover {
        color: var(--primary-white-color);
      }

      .inner,
      .inner2 {
        background-color: var(--primary-white-color);
      }
    }
  }
`;

export const Blog = styled.section`
  text-align: center;
  margin: 330px auto 210px auto !important;

  @media (max-width: 1440px) {
    margin: 250px auto 130px auto !important;
  }

  @media (max-width: 750px) {
    margin: 100px auto 80px auto !important;
  }

  h2 {
    margin-bottom: 150px;

    @media (max-width: 750px) {
      margin-bottom: 100px;
    }
  }

  > div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 75px;

    @media (max-width: 1100px) {
      grid-template-columns: 100%;
    }

    a {
      text-align: center;

      p {
        text-transform: uppercase;
        font-weight: 200;
        margin-bottom: 15px;

        strong {
          font-weight: bold;
        }
      }

      h3 {
        font-size: 40px;
        line-height: 50px;

        @media (max-width: 1440px) {
          font-size: 30px;
          line-height: 40px;
        }

        @media (max-width: 750px) {
          font-size: 24px;
          line-height: 34px;
        }

        @media (max-width: 1100px) {
          max-width: 500px;
          margin: 0 auto;
        }
      }
    }
  }

  > a {
    margin: 150px auto 0 auto;

    @media (max-width: 1440px) {
      margin: 120px auto 0 auto;
    }

    @media (max-width: 750px) {
      margin: 80px auto 0 auto;
    }

    :hover {
      color: var(--primary-dark-color);
    }
  }
`;
