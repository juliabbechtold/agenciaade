import styled from 'styled-components';

export const Content = styled.div`
  max-width: 1180px;
  margin: 200px auto 300px auto;
  padding: 0 20px;

  @media (max-width: 1440px) {
    margin: 150px auto 250px auto;
    max-width: 985px;
  }

  @media (max-width: 750px) {
    margin: 100px auto 150px auto;
  }

  h2 {
    font-size: 80px;
    line-height: 80px;
    color: var(--primary-dark-color);
    text-align: center;
    margin: 0;

    @media (max-width: 1440px) {
      font-size: 60px;
      line-height: 60px;
    }

    @media (max-width: 750px) {
      font-size: 40px;
      line-height: 40px;
    }
  }

  p {
    color: var(--secondary-white-color);
    text-align: center;
    margin: 75px 0 95px 0;
    font-size: 26px;
    line-height: 42px;

    @media (max-width: 1440px) {
      font-size: 22px;
      line-height: 38px;
      margin: 55px 0 75px 0;
    }

    @media (max-width: 750px) {
      font-size: 18px;
      line-height: 34px;
    }
  }

  a {
    background-color: #0cef75;
    font-size: 26px;
    line-height: 24px;
    color: #222535;
    font-weight: bold;
    padding: 20px 150px;
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 0 auto;

    @media (max-width: 1440px) {
      font-size: 22px;
      line-height: 20px;
    }

    @media (max-width: 650px) {
      width: 100%;
      padding: 15px 0px;
      justify-content: center;
      font-size: 18px;
      line-height: 16px;
    }

    svg {
      font-size: 35px;
      margin-left: 12px;

      @media (max-width: 1440px) {
        font-size: 29px;
      }
    }
  }
`;
