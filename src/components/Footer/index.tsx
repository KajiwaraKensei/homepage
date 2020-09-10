// ______________________________________________________
//  フッター
import React from "react"
import Style from "./style"

// ______________________________________________________
// 型定義

interface Props {

}


// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = (props) => {
  return (
    <Style>
      <p><small>&copy; 2020 cats</small></p>
    </Style>
  )
}
export default Component