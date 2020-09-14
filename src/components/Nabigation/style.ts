import styled, { keyframes, css } from "styled-components";
// ______________________________________________________
// 型定義
export type Props = {
  transition?: "cham" | "raim";
  type: "mini" | "normal";
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
const _efw = keyframes`
0%{height: 50vh;}
50%{height: 100vh; width: 100%}
100%{
  height: 100vh; 
  width: 30%;
  }
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
const normal = css<Props>`
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
    & > div {
      transition: all ${hoverSpeed} ease-in;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 11rem;
      height: 11rem;
      border-radius: 50%;
      & > img {
        transition: 0.2s;
        transition: all ${hoverSpeed} ease-in;
      }
      &:hover {
        background-color: #ffffff99;
      }
      & > h1 {
        transition: all ${hoverSpeed} ease-in;
      }
    }
  }
  & > .left {
    background-color: #b3947e;
    & > div {
      & > img {
        transform: scale(-1, 1);
      }
      &:hover {
        & > img {
          transform: scale(1, 1);
          animation: ${poyooon()} 1s linear 0.2s infinite;
        }
      }
    }
  }

  & > .right {
    background-color: sandybrown;
    & > div {
      &:hover {
        & > img {
          transform: scale(-1, 1);
          animation: ${poyooon(true)} 1s linear 0.2s infinite;
        }
      }
    }
  }

  ${({ transition }) =>
    transition ? (transition === "raim" ? raim : cham) : ""}
`;
export default styled.div<Props>`
  ${(props) => (props.type === "normal" ? normal : mini)}
`;

const raim = css`
  & > .right {
    width: 0;
    transition: ${AnimationFast};
    overflow: hidden;
    height: 100vh;
  }
  & > .left {
    animation: ${efw} 1.5s forwards;
    width: 30%;
    transition: ${Animation};
    height: 100vh;
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
    width: 70%;
    transition: ${Animation};
    height: 100vh;
  }

  @media screen and (max-width: 600px) {
    & > .left {
      position: fixed;
      animation: ${_efw} 1.5s forwards;
      right: 0;
      width: 20vw;
      overflow: hidden;
    }
    & > ._left {
      position: fixed;

      width: 80vw;
      transition: ${Animation};
      height: 100vh;
    }
  }
`;
const cham = css`
  @media screen and (max-width: 600px) {
    & > .right {
      position: fixed;
      animation: ${_efw} 1.5s forwards;
    }
  }

  & > .right {
    animation: ${efw} 1.5s forwards;
    width: 30%;
    transition: ${Animation};
    height: 100vh;
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
    height: 100vh;
  }
  & > .left {
    width: 0;
    transition: ${AnimationFast};
    overflow: hidden;
  }
`;

const ani_back = keyframes`
0%{
height: 50vh;
top: -50%;

}
100%{
height: 50vh;
top: 0%;
  }
`;
const ani_back_right = keyframes`
0%{
height: 50vh;
top: 100%;
}
100%{
height: 50vh;
top: 50%;
  }
`;
const mini = css<Props>`
  height: 100vh;
  overflow: hidden;
  position: relative;
  & > .left {
    top: 0;
    left: 0;
    background-color: #b3947e;
    animation: ${ani_back} 0.5s forwards;
    & > div {
      & > img {
        transform: scale(-1, 1);
      }
      &:hover {
        & > img {
          transform: scale(1, 1);
          animation: ${poyooon()} 1s linear 0.2s infinite;
        }
      }
    }
  }
  & > ._left {
    top: 0;
    left: -100vw;
  }
  & > .right {
    top: 50%;
    left: 0;
    animation: ${ani_back_right} 0.5s forwards;
    background-color: sandybrown;
    & > div {
      &:hover {
        & > img {
          transform: scale(-1, 1);
          animation: ${poyooon(true)} 1s linear 0.2s infinite;
        }
      }
    }
  }
  & > ._right {
    top: 0;
    left: 100vw;
  }
  & > ._right,
  & > ._left {
    overflow: hidden;
    overflow-y: scroll;
    transition: all ${hoverSpeed} ease-in;
    height: 100vh;
    width: 100vw;
    background-color: #000;
    position: absolute;
  }
  & > .right,
  & > .left {
    position: absolute;
    cursor: pointer;
    color: #000;
    width: 100vw;
    height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    transition: all ${hoverSpeed} ease-in;
    & > div {
      transition: all ${hoverSpeed} ease-in;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      width: 5rem;
      height: 5rem;
      border-radius: 50%50%;
      & > img {
        transition: 0.2s;
        width: 3rem;
        height: 3rem;
        object-fit: cover;
        transition: all ${hoverSpeed} ease-in;
      }
      &:hover {
        background-color: #ffffff99;
      }
      & > h1 {
        font-size: 0.9rem;
      }
    }
  }
  ${({ transition }) =>
    transition ? (transition === "raim" ? _raim : _cham) : ""}
`;
export const MiniNav = styled.div<Props>``;

const mini_1 = keyframes`
0%{height: 50vh; width: 100vw; left: 0;}
50%{height: 100vh; width: 100vw; left: 0;}
100%{
  height: 100vh; 
  width: 20%;
  left: 80%;
  }
`;
const mini_left = keyframes`
0%{height: 100vh; width: 80vw; left: -100%;}
50%{height: 100vh; width: 80vw; left: -100%;}
100%{
  height: 100vh; 
  width: 80vw;
  left: 0;
  }
`;
const mini_right = keyframes`
0%{height: 100vh; width: 80vw; left: 100%;}
50%{height: 100vh; width: 80vw; left: 100%;}

100%{
  height: 100vh; 
  width: 80vw;
  left: 20vw;
  }
`;
const miniRight = keyframes`
0%{height: 50vh; width: 100vw; left: 0;top: 50%;}
50%{height: 100vh; width: 100vw; left: 0; top:0;}
100%{
  height: 100vh; 
  width: 20vw;
  left: 0;
  }
`;

const _raim = css`
  & > .right {
    left: 0;
    top: 50%;
    transition: ${AnimationFast};
    height: 100vh;
    z-index: -1;
    opacity: 0;
  }
  & > .left {
    top: 0%;
    left: 80%;
    width: 20vw;
    transition: ${Animation};
    animation: ${mini_1} 1.5s forwards;
    height: 100vh;
    & > div {
      &:hover {
        background-color: inherit;
        & > img {
          animation: ${poyooon(true)} 1s linear 0s infinite;
        }
      }
    }
  }
  & > ._left {
    width: 80vw;
    top: 0;
    left: 0;
    transition: ${Animation};
    animation: ${mini_left} 1.5s forwards;
  }
`;

const _cham = css`
  & > .right {
    top: 0;
    left: 0;
    width: 20vw;
    transition: ${Animation};
    height: 100vh;
    animation: ${miniRight} 1.5s forwards;
    & > div {
      &:hover {
        background-color: inherit;
        & > img {
          animation: ${poyooon()} 1s linear 0s infinite;
        }
      }
    }
  }
  & > ._right {
    top: 0;
    left: 20%;
    width: 80%;
    transition: ${Animation};
    animation: ${mini_right} 1.5s forwards;
  }
  & > .left {
    z-index: -1;
    opacity: 0;
    transition: ${AnimationFast};
  }
`;
