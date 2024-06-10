import { Container, PageTitle } from "../Seminar/seminar.style";
import { Content } from "./parkway.style"

import one from "../../assets/image/one.png";
import two from "../../assets/image/two.png";
import three from "../../assets/image/three.png";
import four from "../../assets/image/four.png";
import five from "../../assets/image/five.png";

function Parkway() {
  return (
    <Container>
      <PageTitle>Parkwayの5つの特徴</PageTitle>

      <Content>
        <dl>
          <dt><img src={one}/></dt>
          <dd>
            <p>投資で<span>成功する</span>ために必要な全ての<span>情報が有る。</span></p>
          </dd>
        </dl>

        <dl>
          <dt><img src={two}/></dt>
          <dd>
            <p>経済的<span>自由に</span>なる方法がハッキリ分かる。</p>
          </dd>
        </dl>

        <dl>
          <dt><img src={three}/></dt>
          <dd>
            <p><span>初心者でも成功</span>出来るように口座開設から投資の実行まで順番に勉強出来る。</p>
          </dd>
        </dl>

        <dl>
          <dt><img src={four}/></dt>
          <dd>
            <p><span>１年で２倍</span>になる投資先を探す3つのコツなど独自ノウハウ。</p>
          </dd>
        </dl>

        <dl>
          <dt><img src={five}/></dt>
          <dd>
            <p><span>未経験者</span>でも<span>分かる</span>ように図解で解説。</p>
          </dd>
        </dl>
      </Content>
    </Container>
  )
}

export default Parkway