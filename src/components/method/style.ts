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
  top: 75%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  border-radius: 50%;
  height: 7.5rem;
  width: 7.5rem;
  font-weight: bold;
  border: none;
  outline: none;
  box-shadow: 0px 3px 8px 2px #00000060;
  background-color: #000000e0;
  color: #fff;
  cursor: pointer;
  transition: 0.75s;
  @media screen and (max-width: 600px) {
    top: 50%;
    height: 5rem;
    width: 5rem;
    font-size: 0.8rem;
  }
  &:hover {
    background-color: #fff;
    color: #000;
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
  & > h1 {
    color: #fff;
    padding: 0 3%;
    margin: 0;
    height: 5rem;
    line-height: 5.5rem;
    font-size: 3rem;

    @media screen and (max-width: 600px) {
      font-size: 1.3rem;
    }
  }

  & > div {
    position: fixed;
    top: 5.5rem;
    left: 50%;
    bottom: 0;
    width: 94%;
    max-width: 50rem;
    height: calc(100% - 7rem);
    transform: translateX(-50%);
    background-color: sandybrown;
    border-radius: 0.5rem;
    display: flex;
    overflow: hidden;
    & > img {
      position: absolute;
      right: 1rem;
      top: 1rem;
      width: 2rem;
      cursor: pointer;
      transition: all 0.25s ease-in;
      border-radius: 50%;
      &:hover {
        transform: rotate(90deg);
      }
    }
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
  .post-title {
    font-size: 2rem;
    margin: 0;
    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
    }

    & > img {
      margin-left: 0.5rem;
      transform: translateY(1rem);
      width: 4rem;
      height: 4rem;
      object-fit: cover;
    }
  }
  & div {
    & > p {
      margin: 0.5rem;
    }
    & > h2 {
      font-size: 1rem;
      margin: 1.5rem 0 0.5rem;
      &::after {
        content: "";
        display: block;
        width: 100%;
        height: 1px;
        margin: 0.2rem auto;
        background-color: #000;
      }
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
  background-color: #fff;
  transition: all 0.25s ease-in;
  ${({ select }) =>
    select &&
    css`
      background: none;
    `}
  &:hover {
    ${({ select }) => !select && `background-color: #ffffff69;`}
  }
`;
