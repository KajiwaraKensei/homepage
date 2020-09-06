// ______________________________________________________
// 
import React from "react"
import Home from "components/home"
// ______________________________________________________
// 型定義
type Props = {
  className?: string;
}

// ______________________________________________________
// コンポーネント

const Component: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  )
}
export default Component