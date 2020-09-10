import styled, { keyframes, css } from "styled-components";
// ______________________________________________________
// 型定義
export type Props = {
  transition?: "cham" | "raim";
};
const Animation = `all .5s ease-out`;
const AnimationFast = `all .2s ease-out`;
const hoverSpeed = `.5s`;
const poyooon = (isBack: boolean = false) => keyframes`
0%  { transform: scale(${isBack && `-`}1.1, 0.9) translate(0%, 5%); }
10%  { transform: scale(${isBack && `-`}1.1, 0.9) translate(0%, 5%); }
40%  { transform: scale(${isBack && `-`}1.2, 0.8) translate(0%, 15%); }
50%  { transform: scale(${isBack && `-`}1.0, 1.0) translate(0%, 0%); }
60%  { transform: scale(${isBack && `-`}0.9, 1.2) translate(0%, -100%); }
75%  { transform: scale(${isBack && `-`}0.9, 1.2) translate(0%, -20%); }
85%  { transform: scale(${isBack && `-`}1.2, 0.8) translate(0%, 15%); }
100% { transform: scale(${isBack && `-`}1.0, 1.0) translate(0%, 0%); }
`;
// ______________________________________________________
// スタイル
const efw = keyframes`
0%{width: 100%;}
50%{width: 100%;}
100%{width: 30%;}
`;
const efw1 = keyframes`
0%{width: 0%;}
50%{width: 0%;}
100%{width: 100%;}
`;

const efw2 = keyframes`
0%{width: 100%;}
100%{width: 0%;}
`;

export default styled.div<Props>`
  display: flex;
  position: relative;
  & > ._right,
  & > ._left {
    animation: ${efw2} 0.5s forwards;
    overflow: hidden;
    overflow-y: scroll;
    transition: all ${hoverSpeed} ease-in;
    height: 100vh;
    width: 1%;
    background-color: #000;
  }
  & > .right,
  & > .left {
    cursor: pointer;
    color: #000;
    flex-shrink: 2;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    transition: all ${hoverSpeed} ease-in;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    & > div {
      transition: all ${hoverSpeed} ease-in;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 11rem;
      height: 11rem;
      border-radius: 50%50%;
      @media screen and (max-width: 600px) {
        width: 5rem;
        height: 5rem;
        & > img {
          width: 3rem;
          height: 3rem;
          object-fit: cover;
        }
      }
      &:hover {
        background-color: #ffffff99;
      }
      & > h1 {
        transition: all ${hoverSpeed} ease-in;
        @media screen and (max-width: 600px) {
          font-size: 0.9rem;
        }
      }
    }
  }
  & > .left {
    background-color: #b3947e;
    & > div {
      & > img {
        transition: all ${hoverSpeed} ease-in;
        transform: scale(-1, 1);
      }
      &:hover {
        & > img {
          transition: 0.2s;
          transform: scale(1, 1);
          animation: ${poyooon()} 1s linear 0.2s infinite;
        }
      }
    }
  }

  & > .right {
    background-color: sandybrown;
    & > div {
      & > img {
        transition: all ${hoverSpeed} ease-in;
      }
      &:hover {
        & > img {
          transition: 0.2s;
          transform: scale(-1, 1);
          animation: ${poyooon(true)} 1s linear 0.2s infinite;
        }
      }
    }
  }

  ${({ transition }) =>
    transition ? (transition === "raim" ? raim : cham) : ""}
`;

const raim = css`
  & > .right {
    width: 0;
    transition: ${AnimationFast};
    overflow: hidden;
  }
  & > .left {
    animation: ${efw} 1.5s forwards;
    width: 30%;
    transition: ${Animation};
    & > div {
      &:hover {
        & > img {
          animation: ${poyooon(true)} 1s linear 0s infinite;
        }
      }
    }
  }
  & > ._left {
    animation: ${efw1} 1.5s forwards;
    width: 100%;
    transition: ${Animation};
  }
`;
const cham = css`
  & > .right {
    animation: ${efw} 1.5s forwards;
    width: 30%;
    transition: ${Animation};
    & > div {
      &:hover {
        & > img {
          animation: ${poyooon()} 1s linear 0s infinite;
        }
      }
    }
  }
  & > ._right {
    animation: ${efw1} 1.5s forwards;
    width: 100%;
    transition: ${Animation};
  }
  & > .left {
    width: 0;
    transition: ${AnimationFast};
    overflow: hidden;
  }
`;
