// ______________________________________________________
// 
import React from "react"
//import Style from "./style"
import { withRouter, RouteComponentProps } from "react-router-dom"
// ______________________________________________________
// 型定義

interface Props extends RouteComponentProps {

}


// ______________________________________________________
// コンポーネント
/*const Component: React.FC<Props> = (props) => {
  const { history } = props

  const screenTransition = () => () => {
    history.push("/cham")
  }
  return (
    <Style>
      <div onClick={screenTransition()} className="left">RAIM</div>
      <div className="right">CHAM</div>
    </Style>
  )
}
export default withRouter(Component) */