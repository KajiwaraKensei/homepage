// ______________________________________________________
// メソッド
import React from "react"
import Style, { Method } from "./style"
import Method01 from "./Method01"
import Method02 from "./Method02"
import Method03 from "./Method03"
import Nav from "./Nav"
import CloseIcon from "images/batten.svg"
// ______________________________________________________
// 型定義

interface Props {
  isOpen: boolean
  onChange?: (next: boolean) => void;
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = (props) => {
  const { isOpen } = props

  // メソッドを表示するか？　Falseだとボタンを表示
  const [isMethod, setMethod] = React.useState(false)

  const toggleButton = (next: boolean) => () => {
    setMethod(next)
  }

  return isOpen ? !isMethod ? (
    <Style onClick={toggleButton(true)} isButton={isOpen}>
      METHOD
    </Style>
  ) : <MethodComponent onChange={setMethod} isOpen={isMethod} /> : null
}



// ______________________________________________________
// メソッド詳細
const MethodComponent: React.FC<Props> = (props) => {
  const { onChange } = props
  const [select, setSelect] = React.useState(0)　//表示する種類

  // メソッドを閉じる
  const toggleButton = (next: boolean) => () => {
    onChange!(next)
  }

  // クリック貫通防止
  const onClickLi = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
  }

  return (
    <Method onClick={toggleButton(false)}>
      <h1>初めて、猫と暮らす方へ</h1>

      <div onClick={onClickLi}>
        <Nav select={select} onChange={setSelect} />
        {select === 0 && <Method01 />}
        {select === 1 && <Method02 />}
        {select === 2 && <Method03 />}
        <img onClick={toggleButton(false)} src={CloseIcon} alt="" />
      </div>
    </Method>
  )
}

export default Component