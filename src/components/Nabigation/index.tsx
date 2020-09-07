// ______________________________________________________
// ナビゲーション
import React from "react"
import Style from "./style"
import { useHistory, useLocation } from "react-router"
import Method from "components/method"
import Chats from "images/cats.png"
import { Element } from "react-scroll"

// ______________________________________________________
// 型定義
type Route = "raim" | "cham"

interface Props {
  type?: Route
}

// ______________________________________________________
// コンポーネント
const Component: React.FC<Props> = (props) => {
  const { children } = props
  const ref = React.useRef<HTMLDivElement | null>(null)
  const history = useHistory() //履歴
  const [transition, setTransition] = React.useState<undefined | Route>(undefined)// アニメーションの種類
  const location = useLocation() // URL

  //画面遷移のアニメーション
  const screenTransition = (path: Route) => () => {
    setTransition(path === transition ? undefined : path)
    history.push(path === transition ? "/" : path)
    setMethodButton(path === transition)
    setTimeout(() => {
      window.scrollTo(0, ref!.current!.offsetTop)
    }, 1)
  }
  // メソッドを表示するか？
  const [methodButton, setMethodButton] = React.useState(true)

  //画面ロード時
  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        break;
      case "/raim":
        setTransition("raim")
        setMethodButton(false)
        break;
      case "/cham":
        setTransition("cham")
        setMethodButton(false)
        break;
    }
  }, [location])

  return (
    <Element name="nav">
      <Style ref={ref} transition={transition}>
        <div className="_left">{children}</div>
        <div onClick={screenTransition("raim")} className="left"><div><img src={Chats} alt="" /><h1>RAIM</h1></div></div>
        <div onClick={screenTransition("cham")} className="right"><div><img src={Chats} alt="" /><h1>CHAM</h1></div></div>
        <div className="_right">{children}</div>
        <Method isOpen={methodButton} onChange={setMethodButton} />
      </Style>
    </Element>
  )
}
export default Component