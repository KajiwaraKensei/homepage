// ______________________________________________________
// Chamページ
import React from "react"
import Style from "./style"

// ______________________________________________________
// 型定義
interface Props {
}

const images = [
  "生後２ヶ月",
  "生後３ヶ月",
  "生後３ヶ月半",
  "生後６ヶ月",
  "９ヶ月",
  "１歳",
  "１歳２～３ヶ月",
  "１歳６ヶ月",
  "２歳",
]

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = (props) => {
  const mapImages = images.map((description, index) => (
    <div className="item" key={"raim_" + index}>
      <img src={`../../../images/cham${('00' + (index + 1)).slice(-2)}.jpg`} alt="" />
      <p>{description}</p>
    </div>
  ))

  return (
    <Style>
      <div className="wrapper grid">
        {mapImages}
      </div>
    </Style>
  )
}
export default Component