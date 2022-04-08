import styled from 'styled-components';

export const Content = styled.section`
  h2 {
    display: flex;
    align-items: center;
    width: fit-content;
    margin: 0 auto;
    text-align: center;

    @media (max-width: 470px) {
      width: 255px;
    }

    ::before,
    ::after {
      content: url('assets/img/leafs.svg');
      position: relative;
      top: 5px;
    }

    ::after {
      transform: rotateY(180deg);
    }
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: 155px;
    grid-gap: 35px;
    margin-top: 95px;
    margin-bottom: 70px;

    @media (max-width: 1440px) {
      grid-auto-rows: 110px;
      margin-top: 75px;
      margin-bottom: 50px;
    }

    @media (max-width: 1200px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 900px) {
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 25px;
    }

    @media (max-width: 550px) {
      grid-template-columns: 100%;
      margin-top: 55px;
      grid-auto-rows: 100px;
    }

    div {
      border: 1px solid #797d8e;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--secondary-white-color);
      padding: 0 20px;

      h3 {
        color: var(--secondary-white-color);
        font-size: 26px;
        line-height: 32px;
        font-weight: 200;
        margin-bottom: 18px;
        text-align: center;

        @media (max-width: 1440px) {
          font-size: 20px;
          line-height: 26px;
          margin-bottom: 10px;
        }

        @media (max-width: 750px) {
          font-size: 18px;
          line-height: 24px;
          margin-bottom: 0px;
        }
      }

      p {
        font-size: 18px;
        line-height: 32px;
        margin: 0;

        @media (max-width: 1440px) {
          font-size: 14px;
          line-height: 28px;
        }
      }
    }
  }
`;
