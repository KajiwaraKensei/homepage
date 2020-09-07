// ______________________________________________________
// 
import React from "react"
import { Article } from "./style"
import Cat from "images/catsmethod.png"

// ______________________________________________________
// 型定義

interface Props {
}

// ______________________________________________________
// コンポーネント

const Component: React.FC<Props> = (props) => {
  return (
    <Article>
      <header className="post-info">
        <h2 className="post-title">猫の出会い方 <img src={Cat} alt="" /></h2>
      </header>
      <div>
        <h2>ペットショップ</h2>
        <p>ペットショップでは猫がショーケースで展示されていると衝動買いしがちですが、健康状態などを確かめて慎重に選びましょう。</p>
      </div>
      <div>
        <h2>ブリーダー</h2>
        <p>飼育環境や、親・兄弟猫を確認することができます。親兄弟と一緒に少しでも長く過ごしている方が猫同士のコミュニケーション力が養われます。</p>
      </div>
      <div>
        <h2>動物愛護施設</h2>
        <p>信頼できる団体であるかを事前に調べておきましょう。譲渡には条件があるので事前に確認してください。</p>
      </div>
      <div>
        <h2>里親募集</h2>
        <p>ネットやペット雑誌などの掲示板にも多く掲載され、個人レベルでの譲渡が行われています。</p>
      </div>
      <div>
        <h2>捨て猫の保護</h2>
        <p>病気などに感染している場合も多いので、まずは動物病院で健康診断を受けましょう。</p>
      </div>
    </Article>
  )
}
export default Component
