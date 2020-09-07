// ______________________________________________________
// 
import React from "react"
import { Article } from "./style"
import Cat from "images/catsmethod.png"

// ______________________________________________________
// 型定義

interface Props {
  isOpen: boolean
  onChange?: (next: boolean) => void;
}

// ______________________________________________________
// コンポーネント

const Component: React.FC = (props) => {
  return (
    <Article>
      <header className="post-info">
        <h2 className="post-title">飼えなくなってしまった場合<img src={Cat} alt="" /></h2>
      </header>
      <div>

        <ul>
          <li>転勤の際に引っ越し先がペット禁止だった場合</li>
          <li>家族に猫アレルギーが出た場合</li>
          <li>近所から苦情がきて対策がとれない場合</li>
          <li>ペット禁止の集合住宅で飼っていることがバレてしまった場合</li>
          <li>子猫が多く生まれたが全頭育てることが不可能な場合</li>
        </ul>
        <br />
        <p>上記の例などによって飼えなくなってしまった場合には</p>
        <ul>
          <li>獣医や通っている動物病院に相談してみる</li>
          <li>一時預かりをしてもらえるペットホームやペットシッターなどを探す</li>
          <li>動物愛護団体などを通じて探す</li>
        </ul>
        <p>
          などの相談を必ずしてください。<br />
                保険所の連れて行くと約１週間ほど新しく飼ってくれる飼い主を探し、見つからなければ殺処分されてしまいます。<br />
                このような悲しい事態にならないためにも、まずはペットを飼う前に最後までお世話できるか考えましょう。
            </p>
      </div>
    </Article>
  )
}
export default Component
