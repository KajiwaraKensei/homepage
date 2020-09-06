import styled, { css } from "styled-components";

// ______________________________________________________
// 型定義
export type Props = {
  isButton?: boolean;
};

// ______________________________________________________
// スタイル
export default styled.button<Props>`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 50%;
  height: 7.5rem;
  width: 7.5rem;
  border: none;
  outline: none;
  box-shadow: 0px 3px 8px 2px #00000060;
  cursor: pointer;
  transition: 0.75s;
  &:hover {
    background-color: #000000e0;
    color: #fff;
  }
`;

// ______________________________________________________
// スタイル
export const Method = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  background-color: #00000099;
  & > div {
    position: fixed;
    top: 3%;
    left: 3%;
    bottom: 0;
    width: 94%;
    height: 94%;
    background-color: sandybrown;
    border-radius: 0.5rem;
    display: flex;
    overflow: hidden;
  }
`;

// ______________________________________________________
// スタイル
export const Article = styled.article`
  padding: 1rem;
  flex-basis: calc(100% - 5rem);
  height: 100%100%;
  overflow-y: scroll;
  & > .wrapper {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0 4%;
  }
  .news-contents {
    display: flex;
    justify-content: space-between;
    margin-bottom: 50px;
  }
  .post-info {
    position: relative;
    padding-top: 4px;
  }
  & div {
    & > p {
      margin: 0.5rem;
    }
    & > h2 {
      font-size: 1rem;
      margin: 1.5rem 0 0.5rem;
    }
  }
`;

// ______________________________________________________
// スタイル
export const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-around;
  align-items: center;
  flex-basis: 5rem;

  & > div {
  }
`;

// ______________________________________________________
// スタイル
type NavigationProps = {
  backgroundColor: string;
  select?: boolean;
};
export const NavigationButton = styled.div<NavigationProps>`
  cursor: pointer;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  background-color: #fff;
  border-bottom: 1px solid #aaa;
  border-top: 1px solid #aaa;
  ${({ select }) =>
    select &&
    css`
      background: none;
    `}
  &:hover {
    filter: saturate(200%);
  }
`;
