import { Container, Title, Content } from "./seminar.style";

function Seminar() {

  return (
    <Container>
      <Title>開催中のセミナー</Title>

      <Content>
        <p>
          投資未経験者・初心者を対象とした投資の基礎セミナーを開催しています。
        </p>
        <p>
          Parkway金融研究センターのセミナーに参加するだけで投資の成功確率が確実に上昇するでしょう。それで満足して頂き、お金や投資を好きになっていただければそれ以上の喜びはありません。ぜひ弊センターのセミナーを楽しんでください。
          期間限定で今なら通常料金5,000円が無料ですが
          まもなく通常料金に戻します。
        </p>
        <div className="sub-title">
          当講座を<span className="highlight">視聴</span>すると....
        </div>
        <p>
          1、労働以外の投資収入を確保する方法が分かることで、老後の不安も解消されます。
          <br />
          ・複利計算でどのように資産を増やすべきなのか？
          <br />
          ・資産を作ったあとは老後資金としてどのように維持しながら生活費として使うのか？
        </p>
        <p>
          2、動画は好きな時間に好きな場所で何度でも視聴可能。忙しい人でも知識を習得できます。
          <br />
          （動画は再生速度の変更も可能です。途中で止めても続きから再生できます。）
        </p>
      </Content>
    </Container>
  );
}

export default Seminar;
