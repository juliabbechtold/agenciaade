import styled from 'styled-components';

export const Content = styled.section`
  margin: 230px auto 300px auto;

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
