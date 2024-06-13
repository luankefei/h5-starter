import { Container, PageTitle, Content } from "./customer.style";

import avatar1 from "../../assets/image/avatar1.png";
import avatar2 from "../../assets/image/avatar2.png";
import avatar3 from "../../assets/image/avatar3.png";
import avatar4 from "../../assets/image/avatar4.png";
import avatar5 from "../../assets/image/avatar5.png";

function CustomerVoice() {
  return (
    <Container>
      <PageTitle>お客様の声</PageTitle>

      <Content>
        <p>過去に株にやっていましたが、ちゃんと勉強していなかったので株を持ってほったらかしにして眺めているような状況でした。自分の判断で株の成績も変わることが分かりました。初心者にこそお勧めのセミナーです。</p>

        <div className="line"></div>

        <dl>
          <dt>
            <img src={avatar3} />
          </dt>
          <dd>
            <p>会社員</p>
            <p>
              <span>50代</span>
              <span>男性</span>
            </p>
          </dd>
        </dl>
      </Content>

      <Content>
        <p>子供が大きくなって時間もあるため、将来のために投資をしたいなと思って参加しました。 ネットで調べても難しかったので、初心者にも分かりやすく教えて下さりとても勉強になりました。老後の不安がなくなり、受講後の資産額も100万円ほど増えています！</p>

        <div className="line"></div>

        <dl>
          <dt>
            <img src={avatar2} />
          </dt>
          <dd>
            <p>専業主婦</p>
            <p>
              <span>40代</span>
            </p>
          </dd>
        </dl>
      </Content>

      <Content>
        <p>そろそろ老後のことも考えないといけないと思い、参加にしました。</p>
        <p>一般的な資産運用よりもお得に運用が出来るということで、老後の不安が和らぎました。結果的に不要な保険を解約し、毎月3万円のお金が浮き、投資に回しています！</p>

        <div className="line"></div>

        <dl>
          <dt>
            <img src={avatar4} />
          </dt>
          <dd>
            <p>会社員</p>
            <p>
              <span>40代</span>
              <span>男性</span>
            </p>
          </dd>
        </dl>
      </Content>

      <Content>
        <p>毎月カツカツな生活から抜け出したくて、資産運用に興味を持っていたこともあり参加しました。</p>
        <p>YOUTUBEより遥かにわかりやすい解説をしていただきました！</p>
        <p>このセミナーに参加していなければ、おそらく今も暗黒生活が続いていたはずです...</p>

        <div className="line"></div>

        <dl>
          <dt>
            <img src={avatar5} />
          </dt>
          <dd>
            <p>会社員</p>
            <p>
              <span>30代</span>
              <span>男性</span>
            </p>
          </dd>
        </dl>
      </Content>

      <Content>
        <p>株式投資を始めたのは、2022年です。今の給料だけでは将来の不安を感じています。結婚したら自分が仕事を辞める可能性もあるし、子どもが生まれたらしばらくは働けないので、その時に彼の給料だけでは不安だなと思っています。口座を開いても最初は株価の動きを見るだけで実際に投資をしないで、シミュレーションで試してみるとか。みなさん、儲かりたいという気持ちが強くて、最初から大きな金額で投資してしまうから失敗するのかもしれません。まずは少額から始めてみるのがいいかなと思います。</p>

        <div className="line"></div>

        <dl>
          <dt>
            <img src={avatar1} />
          </dt>
          <dd>
            <p>会社員</p>
            <p>
              <span>20代</span>
              <span>女性</span>
            </p>
          </dd>
        </dl>
      </Content>
    </Container>
  )
}

export default CustomerVoice