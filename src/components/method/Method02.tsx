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
        <h2 className="post-title">猫に必要なもの<img src={Cat} alt="" /></h2>
      </header>
      <div>
        <h2>ベッド</h2>
        <p>
          猫が安心してくつろげるスペースにベッドを用意しましょう。猫は日当たりの良い場所や、外を見るのが好きな子が多いので、窓辺に設置するのもおすすめです。
        </p>
      </div>
      <div>
        <h2>高いところで休めるスペース</h2>
        <p>猫が上下運動のできるタワーがあると便利です。</p>
      </div>
      <div>
        <h2>ひとりになれるスペース</h2>
        <p>落ち着きたい時や怖い時に身を隠すための安心できるスペースを確保しましょう。</p>
      </div>
      <div>
        <h2>おもちゃ</h2>
        <p>飼い主といっしょに遊べる”じゃらし”や、猫用のおもちゃを複数用意しておきましょう。</p>
      </div>
      <div>
        <h2>フード類</h2>
        <p>毎日与えるフードと一緒に、フード用と清潔な水を入れられる器も用意しておきましょう。「猫の草」も合わせて用意してあげると良いでしょう</p>
      </div>
      <div>
        <h2>キャリーバッグ</h2>
        <p>わが家に連れてくる時や動物病院へ行く時に使用します。</p>
      </div>
    </Article>
  )
}
export default Component
