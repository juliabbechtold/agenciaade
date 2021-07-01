import styled, { keyframes } from "styled-components";

const heartBeat = keyframes`
    0%, 100%, 40%, 60% {
        transform: scale(1);
    }
    20%, 80% {
        transform: scale(1.3);
    }
`;

export const Container = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;

  p,
  a {
    font-size: 14px;
    color: #000;
    text-decoration: none;
    margin: 0;
  }

  svg {
    margin: 0 8px;
    height: 15px;
    width: auto;
    position: relative;
    color: #ff5050;
    animation-name: ${heartBeat};
    animation-iteration-count: infinite;
    animation-duration: 2s;
  }
`;
export const Content = styled.footer`
  display: grid;
  grid-template-columns: 35% 25% 35%;
  grid-column-gap: 25px;
  justify-content: center;
  margin: 20px 15%;
  border-bottom: 1px solid #000;
  .first {
    align-items: center;
    width: 100%;
    color: #000;
    font-size: 30px;
    b {
      font-weight: bold;
    }
    span {
      color: #ff5050;
    }
    @media only screen and (max-width: 650px) {
      text-align: center;
    }
  }
  .second {
    justify-content: center;
    align-items: center;
    display: flex;
    width: 100%;
  }
  .third {
    display: flex;
    flex-direction: column;
    width: 100%;
    .box {
      display: flex;
      width: 100%;
      .GrLocation {
        width: 25%;
        font-size: 50px;
        justify-content: center;
        align-items: center;
        display: flex;
        path {
          stroke: #ff5050;
        }
      }
      .MdPhoneIphone {
        width: 30%;
        font-size: 50px;
        color: #ff5050;
        justify-content: center;
        align-items: center;
        display: flex;
      }
      .content {
        width: 75%;
        .title {
          display: flex;
          width: 100%;
          .title-footer {
            font-weight: bold;
            font-size: 14px;
            width: auto;
            margin: auto;
            padding-right: 10px;
            color: #000;
          }
          .line {
            background: #ff5050;
            width: 100%;
            height: 2px;
            align-items: center;
            display: flex;
            position: relative;
            margin: auto;
          }
        }
        .subtitle-footer {
          color: #646464;
          margin: unset;
        }
        .tel-numbers {
          display: flex;
          width: 100%;
          a {
            color: #646464;
            margin: unset;
            padding-right: 10px;
            span {
              font-weight: bold;
            }
          }
          @media only screen and (max-width: 1240px) {
            flex-direction: column;
          }
        }
      }
      :last-child {
        margin-top: 15px;
        @media only screen and (max-width: 1000px) {
          :last-child {
            margin-top: 0;
          }
        }
      }
      @media only screen and (max-width: 1420px) {
        .GrLocation {
          width: 20%;
        }
        .content {
          width: 80%;
        }
      }
    }
  }
  @media only screen and (max-width: 1400px) {
    grid-template-columns: 40% 20% 40%;
    grid-column-gap: unset;
  }
  @media only screen and (max-width: 1000px) {
    grid-template-columns: 100%;
    grid-column-gap: unset;
    .third {
      flex-direction: row;
      .content {
        .subtitle-footer,
        .tel-numbers {
          min-height: 50px;
        }
      }
    }
  }
  @media only screen and (max-width: 650px) {
    .third {
      flex-direction: column;
      .box {
        .GrLocation {
          width: 30%;
        }
      }
    }
  }
`;
