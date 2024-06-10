import React, { useState } from "react";
import { Container, PageTitle, GrayContent, Content } from "./voice.style";
import image1 from "../../assets/image/voice_image1.png";
import image2 from "../../assets/image/voice_image2.png";
// import img14 from "../../assets/image/image14.png";

function Seminar() {
  const [isShow, setStatus] = useState(false);

  const handleChange = () => {
    setStatus(true);
  };
  return (
    <Container>
      <PageTitle>なぜ勉強が必要か</PageTitle>

      <GrayContent>
        勉強をしないで投資を理解した気になっていると、この先思いも寄らない事になってしまうことも。
        ここ数年の破産推移と勉強に対する考え方をご紹介します。 投資で破産９倍
        <div className="sub-title">勉強をせずに、業者の言いなりで</div>
        勉強をせずに、業者の言いなりで
        投資をした結果、失敗する人が急増しています。 投資には勉強が必要です。
      </GrayContent>

      <Content>
        <div className="sub-title">19歳で1000億円（ALEXANDRA ANDERSEN）</div>
        <p>
          彼女の名は アレクサンドラ・アンデルセンさん。
          <br />
          シリコンバレーの人間でもなく、ハリウッドの女優でもありません。
          <br />
          彼女は2018年の長者番付で、10億ドル（約1136億円）資産の保持者として1476位にランクインしました。
          <br />
          北欧のノルウェーでは、他の国よりも早い年齢で家族経営のビジネスに関わり始める習慣があり、同時に財産も譲渡されます。
          <br />
          彼女は地元オスロで勉強し、引き継いだ財産を不動産運用やヘッジファンドにもうまく活用してきました。
          <br />
          お父さんは娘たちに「高級な車を買っても良いが、中古車しか買ってはいけない」というルールを守らせています。
          <br />
          資産家は、資産家の教育を受けています。
          <br />
          皆さんはこれまで資産家になるための教育を何時間受けてきましたか？
          <br />
          学んでもいないことが出来るようになることなんてありえません。
          <br />
          学ばないといけません。学ぶ者にこそ『幸せになる権利』があります。
        </p>
        <div>
          <img src={image1} />
        </div>
      </Content>

      <Content>
        <div className="sub-title">バフェット</div>
        <p>
          世界一の株式投資家として君臨するバフェット氏がフォーブス誌に答えたインタビューを下記に引用します。
        </p>

        <p>
          私が7～8歳の時、幸運なことに本当に興味がもてるものに出会えました。「投資」です。11歳になる頃には、オマハ公共図書館にある投資関連の本は読破していました。そのうちの何冊かは何度も読んだものです。私の投資人生に最も影響を与えた1冊を買ったのは偶然でした。ベンジャミン・グレアム著『賢明なる投資家』は繰り返し読みました。6回くらいでしょうか。そこには健全な哲学があり、非常によく書かれており、理解するのも簡単です。それに、今日も私が実践する投資哲学を与えてくれました。
        </p>

        <p>
          ただ究極的には、他のすべてよりも大切な投資があります。自分に投資することです。自分の弱さに向き合うこと─。それも今すぐに、です。
        </p>
        <p>
          自分の中にあるものは、決して他の誰にも奪えません。そして、誰もがまだ眠れる力を秘めているのです。自分の才能を伸ばすことで、その潜在能力を10%、20%、30%と高めることができれば、誰もそれに“課税”などできないわけです。“インフレーション”で目減りするようなこともありません。終生、あなただけのものなのです。
        </p>
        <div>
          <img src={image2} />
        </div>
      </Content>
    </Container>
  );
}

export default Seminar;
