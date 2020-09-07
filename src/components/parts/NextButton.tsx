import styled, { keyframes } from "styled-components";
import React from "react"

// ______________________________________________________
// 三角形SVG
const loop = keyframes`
   0% {
    opacity: 0;
    transform: translateX(-50%)translateY(-150%);
  } 
  33%, 66%{
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translateX(-50%)translateY(100%);
  }
`
// 下三角SVG
const LowerTriangleComponent = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="30"
    height="15"
    viewBox="0, 0, 50, 25"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="0,0 25,25 50,0" stroke="#fff" fill="none" />
  </svg>
)
// 下三角のスタイル
type LowerTriangle = {
  delay?: number | string
}
const LowerTriangle = styled(LowerTriangleComponent) <LowerTriangle>`
  animation: ${loop} 1.8s cubic-bezier(0, 0, 1, 1) ${({ delay }) => delay || 0}s
    infinite;
  position: absolute;
  top: 50%;
  left: 50%;
  opacity: 0;
  stroke-width: 5px;
`

// ______________________________________________________
// スタイル
const NextButton = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  color: #fff;
  border: none;
  outline: none;
  font-size: 1rem;
  font-weight: 150;
  cursor: pointer;
  padding: 0.5rem;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  transition: calc(700ms * 1.5) cubic-bezier(0.19, 1, 0.22, 1);
  &:hover {
    background-color: #ffffff47;
  }
`

type Props = {
  onClick?: () => void
}
export const Component: React.FC<Props> = (props) => {
  const doClick = () => {
    props.onClick && props.onClick();
  }
  return <NextButton onClick={doClick}>
    <LowerTriangle />
    <LowerTriangle delay={0.9} />
  </NextButton>
}
export default Component