import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  height: auto;
  position: relative;
  padding-bottom: 100px;
  .banner {
    width: 55%;
    position: absolute;
    height: 700px;
  }
  form {
    z-index: 1;
    height: 700px;
    margin: auto 0 auto auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 55%;
    padding: 50px 5%;
    border-bottom-left-radius: 90px;
    background: #f5f5f5;
    .header-contato {
      display: flex;
      flex-direction: column;
      .title {
        display: flex;
        h2 {
          font-weight: bold;
          font-size: 16px;
          margin: auto;
          padding-right: 15px;
        }
        .line {
          background: #ff5050;
          width: 100%;
          height: 1px;
          margin: auto;
        }
      }
      h1 {
        display: flex;
        color: #000;
        font-size: 24px;
        font-weight: 400;
        span {
          position: relative;
          color: #000;
          font-weight: bold;
          bottom: unset;
          font-size: 24px;
        }
      }
    }
    > div {
      width: 100%;
      position: relative;
      display: flex;
      flex-direction: column;
    }

    input,
    textarea {
      width: 100%;
      border: unset;
      border-bottom: 1px solid #ccc;
      font-size: 14px;
      line-height: 24px;
      color: #646464;
      margin-top: 30px;
      background: transparent;
    }

    span {
      position: absolute;
      color: red;
      font-size: 14px;
      bottom: -20px;
    }

    input {
      height: 50px;
      padding: 0 20px;
      background: transparent;
    }

    textarea {
      padding: 20px;
      resize: none;
      height: 150px;
    }

    .btn {
      margin-top: 30px;
      width: fit-content;
      position: relative;

      .disabled {
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;
        top: 0;
        z-index: 1;
      }

      button {
        width: fit-content;
        padding: 10px 20px;
        cursor: pointer;
        background-color: #fff;
        transition: all ease 0.5s;

        :hover {
          background-color: #ccc;
        }
      }
    }
  }
`;
