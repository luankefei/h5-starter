import { useState } from "react";
import {
  Container,
  PageTitle,
  PageTitleWrapper,
  Content,
  QrCodeWrapper,
} from "./video.style";
import qrcodeImage from "../../assets/image/qrcode.png";

import { Modal } from "antd-mobile";

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
      </Content>
      <QrCodeWrapper>
        <button className="btn-qrcode" onClick={onQcodeClick}>
          上記の内容で動画を受け取る
        </button>
      </QrCodeWrapper>
    </Container>
  );
}

export default Question;
