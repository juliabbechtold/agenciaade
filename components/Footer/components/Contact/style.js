import styled from 'styled-components';

export const Content = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #797d8e;
  margin-bottom: 135px !important;

  @media (max-width: 1440px) {
    margin-bottom: 100px !important;
  }

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: flex-start;
    padding-bottom: 100px !important;
  }

  > div {
    max-width: 414px;

    @media (max-width: 1440px) {
      max-width: 320px;
    }

    a {
      font-weight: 200;
      color: var(--secondary-white-color);
    }

    .telefone {
      font-size: 52px;
      line-height: 55px;

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

    .endereco {
      display: flex;
      flex-direction: column;
      font-size: 26px;
      line-height: 32px;
      margin-top: 50px;

      @media (max-width: 1440px) {
        font-size: 20px;
        line-height: 26px;
      }

      @media (max-width: 650px) {
        font-size: 18px;
        line-height: 24px;
      }

      span {
        font-size: 18px;
        font-weight: bold;
        margin-top: 18px;

        @media (max-width: 1440px) {
          font-size: 14px;
        }
      }
    }
  }

  form {
    width: calc(100% - 550px);
    padding-bottom: 175px;

    @media (max-width: 1440px) {
      width: calc(100% - 450px);
    }

    @media (max-width: 1024px) {
      width: 100%;
      padding-bottom: 100px;
    }

    h2 {
      margin-bottom: 125px;

      @media (max-width: 1024px) {
        margin-bottom: 60px;
      }
    }

    .fields {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 100px;

      @media (max-width: 650px) {
        grid-template-columns: 100%;
        grid-row-gap: 30px;
      }

      .field {
        position: relative;
        display: flex;
        flex-direction: column;

        span {
          position: absolute;
          color: red;
          bottom: -20px;
          font-size: 12px;
        }
      }

      input,
      textarea {
        height: 80px;
        width: 100%;
        background-color: transparent;
        border: none;
        border-bottom: 1px solid var(--primary-white-color);
        color: #fff;
        font-size: 18px;
        line-height: 35px;
        padding: 0 30px;
        resize: none;
        border-radius: 0px;

        @media (max-width: 1440px) {
          font-size: 14px;
          line-height: 31px;
          height: 60px;
          padding: 0 20px;
        }

        ::placeholder {
          color: #fff;
        }
      }

      textarea {
        height: 60px;

        @media (max-width: 1440px) {
          height: 45px;
        }
      }

      .-second-row {
        grid-area: 2 / 1 / span 1 / span 3;
        display: flex;
        justify-content: space-between;
        width: 100%;

        @media (max-width: 650px) {
          grid-area: 4 / 1;
          flex-direction: column;
        }

        .message {
          width: calc(100% - 226px);

          @media (max-width: 1440px) {
            width: calc(100% - 185px);
          }

          @media (max-width: 650px) {
            width: 100%;
            margin-top: 15px;
          }
        }

        .btn {
          position: relative;

          @media (max-width: 650px) {
            margin: 40px 0 0 auto;
          }
        }
      }
    }
  }
`;
