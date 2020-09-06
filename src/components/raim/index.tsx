// ______________________________________________________
// 
import React from "react"
import Style from "./style"
import { withRouter, RouteComponentProps } from "react-router-dom"

// ______________________________________________________
// 型定義

interface Props extends RouteComponentProps {
}

const images = [
  "生後２～３ヶ月",
  "生後４ヶ月",
  "生後５ヶ月",
  "生後６～７ヶ月",
  "８ヶ月",
  "９ヶ月",
  "１歳",
  "１歳６ヶ月",
  "２歳",
]
// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = (props) => {

  const mapImages = images.map((description, index) => (
    <div className="item" key={"raim_" + index}>
      <img src={`../../../images/rai${('00' + (index + 1)).slice(-2)}.jpg`} alt="" />
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
export default withRouter(Component)