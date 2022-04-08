import styled, { keyframes } from 'styled-components';

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
  background-color: #0f111a;
  padding-top: 100px;

  .rights {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 70px 20px;

    @media (max-width: 1440px) {
      padding: 50px 20px;
    }

    @media (max-width: 750px) {
      flex-direction: column;
      justify-content: center;
    }

    p {
      font-size: 14px;
      color: var(--primary-white-color);
      margin: 0;
      text-align: center;

      @media (max-width: 1440px) {
        font-size: 12px;
      }
    }

    svg {
      margin: 0 8px;
      height: 15px;
      width: auto;
      position: relative;

      animation-name: ${heartBeat};
      animation-iteration-count: infinite;
      animation-duration: 2s;
    }
  }
`;
