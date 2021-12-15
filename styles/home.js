import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 0 40px 120px 40px;

  @media (max-width: 1440px) {
    padding: 0 40px 100px 40px;
  }

  @media (max-width: 768px) {
    padding: 0 40px 80px 40px;
  }

  @media (max-width: 550px) {
    padding: 0 20px 80px 20px;
  }

  > div {
    display: grid;
    grid-gap: 25px;
    margin: 12.5px 0px;
    grid-auto-rows: 465px;
    width: 100%;
    justify-content: center;

    @media (max-width: 1440px) {
      grid-auto-rows: 365px;
    }

    @media (max-width: 1024px) {
      grid-auto-rows: 265px;
    }

    @media (max-width: 550px) {
      grid-auto-rows: 165px;
      grid-gap: 15px;
      margin: 7.5px 0px;
    }

    a {
      display: flex;
      position: relative;
      height: 100%;

      :hover {
        .text {
          opacity: 1;
        }
      }

      > div {
        width: 100%;
        height: 100%;
      }

      img {
        object-fit: cover;
        object-position: top;
        width: 100%;
        height: 100%;
        background: #808080;
      }

      .text {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
        align-items: flex-end;
        justify-content: center;
        padding-bottom: 30px;
        opacity: 0;
        transition: all ease 0.5s;
        padding: 0 20px;

        .bg {
          position: absolute;
          width: 100%;
          height: 100%;
          bottom: 0px;
          left: 0px;
          z-index: 1;
          background: linear-gradient(
            to top,
            rgb(40, 36, 36),
            rgba(40, 36, 36, 0)
          );
        }

        p {
          color: #fff;
          position: relative;
          z-index: 1;
          font-size: 18px;
          line-height: 22px;
          text-align: center;

          @media (max-width: 1440px) {
            font-size: 15px;
            line-height: 19px;
          }

          @media (max-width: 768px) {
            font-size: 12px;
            line-height: 16px;
          }
        }
      }
    }
  }

  .row-1 {
    grid-template-columns: 22% 31% 20% 23%;

    @media (max-width: 768px) {
      grid-template-columns: repeat(5, 17%);
    }

    a:nth-child(1) {
      @media (max-width: 768px) {
        grid-area: 1 / 1 / span 1 / span 3;
      }
    }

    a:nth-child(2) {
      @media (max-width: 768px) {
        grid-area: 1 / 4 / span 1 / span 2;
      }
    }

    a:nth-child(3) {
      @media (max-width: 768px) {
        grid-area: 2 / 1 / span 1 / span 2;
      }
    }

    a:nth-child(4) {
      @media (max-width: 768px) {
        grid-area: 2 / 3 / span 1 / span 3;
      }
    }
  }

  .row-2 {
    grid-template-columns: 20.5% 17% 19% 17% 20.5%;

    @media (max-width: 768px) {
      grid-template-columns: 39% 27% 27%;
    }

    a:nth-child(4) {
      @media (max-width: 768px) {
        grid-area: 2 / 1 / span 1 / span 2;
      }
    }
  }

  .row-3 {
    grid-template-columns: 19.5% 19% 17% 19% 19.5%;

    @media (max-width: 768px) {
      grid-template-columns: 27% 27% 39%;
    }

    a:nth-child(1) {
      @media (max-width: 768px) {
        grid-area: 2 / 2 / span 1 / span 2;
      }
    }
  }

  .row-4 {
    grid-template-columns: 19.8% 25% 25% 25%;

    @media (max-width: 768px) {
      grid-template-columns: repeat(5, 17%);
    }

    a:nth-child(1) {
      @media (max-width: 768px) {
        grid-area: 1 / 1 / span 1 / span 3;
      }
    }

    a:nth-child(2) {
      @media (max-width: 768px) {
        grid-area: 1 / 4 / span 1 / span 2;
      }
    }

    a:nth-child(3) {
      @media (max-width: 768px) {
        grid-area: 2 / 1 / span 1 / span 2;
      }
    }

    a:nth-child(4) {
      @media (max-width: 768px) {
        grid-area: 2 / 3 / span 1 / span 3;
      }
    }
  }

  .row-5 {
    grid-template-columns: 43% 29% 25%;

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 48%);
    }

    a:nth-child(1) {
      @media (max-width: 768px) {
        grid-area: 1 / 1 / span 1 / span 2;
      }
    }
  }

  .row-6 {
    grid-template-columns: 33% repeat(3, 21%);

    grid-template-columns: 22% 31% 20% 23%;

    @media (max-width: 768px) {
      grid-template-columns: repeat(5, 17%);
    }

    a:nth-child(1) {
      @media (max-width: 768px) {
        grid-area: 1 / 1 / span 1 / span 3;
      }
    }

    a:nth-child(2) {
      @media (max-width: 768px) {
        grid-area: 1 / 4 / span 1 / span 2;
      }
    }

    a:nth-child(3) {
      @media (max-width: 768px) {
        grid-area: 2 / 1 / span 1 / span 2;
      }
    }

    a:nth-child(4) {
      @media (max-width: 768px) {
        grid-area: 2 / 3 / span 1 / span 3;
      }
    }
  }
`;
