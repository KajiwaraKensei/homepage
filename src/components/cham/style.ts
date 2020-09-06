import styled from "styled-components";

// ______________________________________________________
// 型定義
export type Props = {};

// ______________________________________________________
// スタイル

export default styled.div<Props>`
  width: 80vw;
  .wrapper {
    margin: 0 auto;
    padding: 0 4%;
  }
  .grid {
    display: flex;
    flex-wrap: wrap;
    margin-top: 6%;
    margin-bottom: 50px;
    justify-content: center;
  }
  .item {
    width: 20rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
  }
  .item > img {
    height: 20rem;
    width: 100%;
    object-fit: cover;
  }
`;
