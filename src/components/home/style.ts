import styled from "styled-components";
// ______________________________________________________
// 型定義
export type Props = {
  transition?: "cham" | "raim";
};

// ______________________________________________________
// スタイル

export default styled.div<Props>`
  width: 100vw;
  height: 100vh;
  background-image: url(../../../../images/main.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;

  .menu-content {
    max-width: 560px;
    background: #0000004f;
    border-radius: 0.5rem;
    letter-spacing: 0.6em;
    line-height: 2rem;
    font-size: 1.2rem;
  }
  .wrapper {
    margin: 0 auto;
    padding: 0 4%;
  }
`;
