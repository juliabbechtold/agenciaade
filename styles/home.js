import styled from "styled-components";

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Blog = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #2f2f2f;
  border: 1px solid #707070;
  padding: 50px 10%;
  .header-blog {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 0 auto;
    h1 {
      color: #fff;
      text-align: center;
      font-weight: 400;
    }
    h2 {
      color: #fff;
      text-align: center;
      text-transform: uppercase;
      font-weight: bold;
    }
    .line {
      width: 150px;
      height: 1px;
      background: #ff5050;
    }
  }
  .cards {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: auto;
    justify-content: space-between;
    .card {
      width: 50%;
      position: relative;
      display: flex;
      .bg {
        position: relative;
        width: 50%;
        height: 350px;
      }
      .content-card {
        width: 45%;
        background: #171717;
        padding: 30px;
        height: 300px;
        margin-top: 25px;
        .title-card {
          color: #fff;
          font-weight: bold;
          text-transform: uppercase;
        }
        .subtitle-card {
          color: #fff;
          font-weight: 400;
        }
        .btn-card {
          color: #ff5050;
          margin: unset;
        }
        .btn-card:after {
          background: #ff5050;
          width: 50%;
          height: 1px;
          content: "";
          display: flex;
          transition: all ease 0.7s;
        }
        .btn-card:hover:after {
          width: 75%;
        }
      }
    }
  }
`;
