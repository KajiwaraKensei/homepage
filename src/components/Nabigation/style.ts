import styled, { keyframes, css } from "styled-components";
// ______________________________________________________
// 型定義
export type Props = {
  transition?: "cham" | "raim";
};
const Animation = `all .5s ease-out`;
const AnimationFast = `all .2s ease-out`;
const hoverSpeed = `.5s`;

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
  }
  & > .right,
  & > .left {
    color: #fff;
    flex-shrink: 2;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all ${hoverSpeed} ease-in;
    background-position: center center;
    background-repeat: no-repeat;
    background-size: cover;
    & > h1 {
      transition: all ${hoverSpeed} ease-in;
    }
  }
  & > .left {
    background-color: #b3947e;
  }

  & > .right {
    background-color: sandybrown;
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
  }
  & > ._left {
    animation: ${efw1} 1.5s forwards;
    width: 100%;
    transition: ${Animation};
    &:hover {
      flex-shrink: 1.5;
    }
  }
`;
const cham = css`
  & > .right {
    animation: ${efw} 1.5s forwards;
    width: 30%;
    transition: ${Animation};
    &:hover {
      flex-shrink: 2.5;
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
