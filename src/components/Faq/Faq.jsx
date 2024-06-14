import { useState } from "react";
import { Modal } from "antd-mobile";
import {
  Container,
  PageTitle,
  PageTitleWrapper,
  Content,
  Footer,
} from "./faq.style";
import image1 from "../../assets/image/faq.png";
import qrcodeImage from "../../assets/image/qrcode.jpg";

function Question() {
  const [visible, setVisible] = useState(false);

  const onQcodeClick = () => {
    setVisible(true);
  };

  const onModalClose = () => {
    setVisible(false);
  };

  return (
    <Container>
      <PageTitleWrapper>
        <PageTitle>よくある質問</PageTitle>
      </PageTitleWrapper>

      {/* <GrayContent>
        勉強をしないで投資を理解した気になっていると、この先思いも寄らない事になってしまうことも。
        ここ数年の破産推移と勉強に対する考え方をご紹介します。 投資で破産９倍
        <div className="sub-title">勉強をせずに、業者の言いなりで</div>
        勉強をせずに、業者の言いなりで
        投資をした結果、失敗する人が急増しています。 投資には勉強が必要です。
      </GrayContent> */}

      <Content>
        <p>
          <span className="underline">
            Q1、なぜParkway金融研究センターを受講した方がいいですか？
          </span>
          <br />A
          Parkway金融研究センターでは、実践的な投資手法とリスク管理の重要性を専門家から直接学ぶことができます。また、参加者同士がネットワーキングできるため、投資知識を深めるだけでなく、貴重な人間関係を築くことも可能です。これにより、投資スキルを磨き、成功への道を確実に進むことができます。
        </p>
        <p>
          <span className="underline">
            Q2、なぜ期間限定で無料だったり特典までついているのですか？
          </span>
          <br />A
          理由は２つございます。１．投資人口を増やすことがParkway金融研究センターの使命であるため。２．Parkway金融研究センターを少しでも多くの人の知って頂くため。
        </p>
        <p style={{ fontSize: "14px" }}>
          <span className="underline">
            Q3、どのような方が参加されていますか？
          </span>
          <br />A
          男女問わず40代～60代の方が中心です。真面目に資産運用をしたい真剣な方が集まりますが、まったく勉強したことがない方も多数いらっしゃいます。安心してご参加ください。
        </p>
        <p>
          <span className="underline">
            Q4、投資の知識がない初心者でもセミナーの内容は理解できますか？
          </span>
          <br />A
          初心者の方ほどすんなりセミナー内容を理解しやすいので、最短ルートでFXのコツをつかむこともできます。内容は非常に希少価値の高いものですが、どなたでも理解しながら進んでいただけるように、わかりやすく解説いたします。
        </p>
        <p>
          <span className="underline">
            Q5、セミナー動画はスマートフォンでも見れますか
          </span>
          <br />A
          インターネット環境が整っている端末であれば、パソコンに限らず、スマートフォンやタブレットなどの端末でも視聴可能です。
        </p>
        <p>
          <span className="underline">
            Q6、セミナー動画はいつ見ることができますか／動画を繰り返し見ることはできますか
          </span>
          <br />A
          初心者の方ほどすんなりセミナー内容を理解しやすいので、最短ルートでFXのコツをつかむこともできます。内容は非常に希少価値の高いものですが、どなたでも理解しながら進んでいただけるように、わかりやすく解説いたしますA
          開催期間中はいつでも見ることができますし、繰り返し見ることも可能です。視聴期間終了後は視聴不可となりますのでご注意ください。
          。
        </p>
        <p>
          <span className="underline">Q7、友人知人に教えてもよいですか？</span>
          <br />A はい、もちろんです。仲間は多ければ多いほど心強くなります。
        </p>
        <p>
          <span className="underline">
            Q8、登録した後で追加料金や勧誘が来たりしませんか？
          </span>
          <br />
          追加料金や強引な勧誘などは一切ございませんのでご安心ください。
          ※無料講座受講後、弊中心からメールでお得なご案内等をお送りすることはございますが、不要な場合はワンクリックで配信を停止いただけます。
        </p>
      </Content>
      <Footer>
        <img src={image1} onClick={onQcodeClick} />
      </Footer>

      <Modal
        visible={visible}
        // showCloseButton={true}
        closeOnMaskClick={true}
        onClose={onModalClose}
        transparent
        content={<img className="qrcode-image" src={qrcodeImage} />}
      ></Modal>
    </Container>
  );
}

export default Question;
