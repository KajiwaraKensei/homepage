// ______________________________________________________
// 
import React from "react"
import Style from "./style"
import Next from "components/parts/NextButton"
import { scroller } from "react-scroll"
import Think from "images/undraw_taking_notes_tjaf.svg"
// ______________________________________________________
// 型定義
interface Props {
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = (props) => {
  const scroll = () => {
    scroller.scrollTo("nav", {
      duration: 500,
      delay: 0,
      smooth: true,
    })
  }
  return (
    <Style>
      <div className="menu-content wrapper cats">
        <img src={Think} alt="" />
        <p>
          猫の可愛いさを知ってほしい。<br />かつペットを捨てる人が増えているのでその様な人が少しでも減ればいいという願いも込めて作らせて頂きました。
        </p>
        <Next onClick={scroll} />
      </div>
    </Style>
  )
}
export default Component