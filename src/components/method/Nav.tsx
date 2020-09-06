// ______________________________________________________
// メソッドのナビゲーション
import React from "react"
import { Navigation, NavigationButton } from "./style"
// ______________________________________________________
// 型定義

interface Props {
  select: number;
  onChange: (next: number) => void;
}

// ______________________________________________________
// コンポーネント

const Component: React.FC<Props> = (props) => {
  const { select } = props
  const onClick = (index: number) => () => {
    props.onChange(index);
  }
  return (
    <Navigation>
      <NavigationButton select={select === 0} onClick={onClick(0)} backgroundColor="#aad">会う</NavigationButton>
      <NavigationButton select={select === 1} onClick={onClick(1)} backgroundColor="#ada">飼う</NavigationButton>
      <NavigationButton select={select === 2} onClick={onClick(2)} backgroundColor="#daa">無理</NavigationButton>
    </Navigation>
  )
}
export default Component
