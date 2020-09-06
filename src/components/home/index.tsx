// ______________________________________________________
// 
import React from "react"
import Style from "./style"
import Next from "components/parts/NextButton"
// ______________________________________________________
// 型定義
interface Props {
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = (props) => {

  return (
    <Style>
      <div className="menu-content wrapper cats">
        <p>
          猫の可愛いさを知ってほしい。かつペットを捨てる人が増えているのでその様な人が少しでも減ればいいという願いも込めて作らせて頂きました。
        </p>
        <Next />
      </div>
    </Style>
  )
}
export default Component