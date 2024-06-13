import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { Container } from "./introduce.style";
import { PageTitle } from "../Seminar/seminar.style";

import people1 from "../../assets/image/people1.jpg";
import people2 from "../../assets/image/people2.jpg";
import people3 from "../../assets/image/people3.jpg";
import people4 from "../../assets/image/people4.jpg";
import people5 from "../../assets/image/people5.jpg";
import people6 from "../../assets/image/people6.jpg";
import people7 from "../../assets/image/people7.jpg";
import people8 from "../../assets/image/people8.jpg";
import people9 from "../../assets/image/people9.jpg";
import people10 from "../../assets/image/people10.jpg";
import leftArrow from "../../assets/image/Expand_left.png";
import leftArrowStop from "../../assets/image/Expand_left_stop.png";
import rightArrow from "../../assets/image/Expand_right.png";
import rightArrowStop from "../../assets/image/Expand_right_stop.png";

import "swiper/css";
import "swiper/css/pagination";

const list = [
  {
    name: "KING",
    appointment: "<span>センター長</span>KING",
    image: people5,
    introduce:
      "<p>香港大学のMBA学位を持ち、20年以上にわたるグローバル金融市場のバックグラウンドと、16年間のトレーダーとしての取引経験を持っています。また、複数の上場企業の高級役員として勤務し、資産と財富管理、ブローカー業、クレジット、保険、および小売および機構金融サービスの専門知識を積み重ねています。</p><p>現在は、Parkway Groupの創設者として、株式、固定所得、通貨、および商品市場のクライアントに基本的な洞察と分析、また幅広い金融投資および実行サービスを提供しています。</p>",
  },
  {
    name: "木村 達也",
    appointment: "<span>副センター長</span>木村 達也",
    image: people3,
    introduce:
      "<p>20年以上ウォール街の大手投資ファンド、証券会社などの実務経験を積み上げてきた東京に在住、シンガーポール出身の元ファンドマネジャー、現在Parkway金融投資機関のファイナンス.アドバイザーとして活躍、株や為替投資、資産運用のコンサルティング業務を努める。</p>",
  },
  {
    name: "前田 靖幸",
    appointment: "<span>首席研究員</span>前田 靖幸",
    image: people10,
    introduce:
      "<p>1978年9月25日京都生まれ<br/>1998年～2008年 京都で懐始料理を10年修行する<br />2008年　トレードスタート<br />2015年　2億円　収益達成<br />2016年　IB活動　スタート<br />2020年　日本法人　設立<br />2022年　香港法人　設立<br />2024年　Parkway金融研究センター　参加</p>",
  },
  {
    name: "林 孝雄",
    appointment: "<span>チーフアドバイザー</span>林 孝雄",
    image: people8,
    introduce:
      "<p>MBA卒業、25歳に起業してから事業経営一筋。</p><p>専門投資家10年、株式＆FX＆コンサルタントとして活躍。</p><p>収益が億超える後とにかく手堅く負けない投資スタイルを実現。</p><p>個人投資家としては、波動上昇の起点を捉えて利益あげることが得意、また、短・中・長期トレード向きのファンダメンタルズとテクニカルを融合させた独自開発の取引システム「ダブルドラゴン」+「ローソク足の裏わざ」を使用することによって、相場の売買転換の臨界点を見極めることができているため、取引実積抜群！</p>",
  },
  {
    name: "ALEX LEE",
    appointment: "<span>チーフアナリスト</span>ALEX LEE",
    image: people4,
    introduce:
      "<p>日本の名門私立大学大学院卒業。</p><p>大手証券会社に入社した後、金融界の華やかさを知って退職を決意し、メガバンクの海外支店に転職。グローバルプラットフォームで外国為替市場と資金調達に専念で専門知識と実戦経験を身につけた。</p><p>今ではParkway金融研究センターのチーフアナリストとして、投資グループから一般の方まで幅広く、資産運用、バリュー投資のコンサルティング業務に専念している。</p>",
  },
  {
    name: "KONAN KANEKO",
    appointment: "<span>チーフアドバイザー</span>KONAN KANEKO",
    image: people7,
    introduce:
      "<p>1995年埼玉県草加市生まれ。</p><p>2015年親元を離れ海外留学を決める。</p><p>中国の名門私立大学大学院卒業。在学中・フリーランスとして働く後輩との、ご縁をきっかけに勤めること以外の働き方を知り独立を決意。</p><p>持ち前のコミュニケーションスキルを活かし、在学中に日中交流会やユース経営者サロンを手がける。卒業後【中国マーケの会社を経営｜工場投資｜D2Cブランドの商品開発コンサル】</p><p>2020年にコロナの影響を受け【金融業界】へ本腰を入れる。金融業界で若手ながらも個人法人問わず、年間300名以上の個別相談に対応。</p><p>現在は自分の会社も経営しながら・ファイナンシャルアドバイザーとして一般の方から経営者まで幅広く・資産形成、トレードのコンサルタント業務を行なっている。</p>",
  },
  {
    name: "マイケル",
    appointment: "<span>首席研究員</span>マイケル",
    image: people9,
    introduce:
      "<p>日本の大学院でIT知識を学び、富士通に入社。その後、豪州に移民、投資ファンドに転職。</p><p>為替取引と株式市場に専念し、専門知識や実践経験を積み重ね、自分なりの投資手法で活躍している。</p><p>現在ではParkway金融研究センターの研究員として、バリュー投資のコンサルティングサービスを担当している。</p><p>逆張り＋押し目買いの投資手法にご興味のある方はぜひ時間を作って話しましょう。</p>",
  },
  {
    name: "フルヤ",
    appointment: "<span>チーフアナリスト</span>フルヤ",
    image: people6,
    introduce:
      "<p>1992年台湾生まれ。日本の名門私立大学慶應義塾経済学部卒業。</p><p>大手証券会社に入社した後、アカウントマネージャーを担当し、一年後、投資顧問業者へ昇進。認識の広がりにつき、金融界に無限の可能性があると、退職を決意し。グローバルの視点から考え、より先進な金融サービスを日本に引いれることに痛感。</p><p>グローバルプラットフォームで通貨ペア、株、商品CFD、仮想通貨に専念、テクニカル分析得意。</p><p>今ではParkway金融研究センターのチーフアナリスト、戦略投資部部長担当、金融機関から個人投資家まで、資産運用、投資サポート業務に専念している。</p>",
  },
  {
    name: "Louisa Chan",
    appointment: "<span>チーフアドバイザー</span>Louisa Chan",
    image: people2,
    introduce:
      "<p>GEMアセットマネジメントプテリミテッドで7年間、ファンドマネージャーとして豊富なファンド運用およびアセットマネジメントの経験を積み重ねた。2019年に日本の大手証券会社に入社し、海外市場ビジネスディレクターとして、大量な米国株投資、為替投資、ゴールド投資の実務経験をした。</p><p>現在はParkway金融研究センターのチーフアドバイザーとして、投資家教育、資産管理とバリュー投資に専念している。</p>",
  },
  {
    name: "稲垣 広雅",
    appointment: "<span>チーフアドバイザー</span>稲垣 広雅",
    image: people1,
    introduce:
      "<p>1974年香港生まれ。日本の経営学部を卒業。香港大学で金融学の修士を取得。</p><p>学術的な基礎を確立した後、25年間も銀行や証券他金融業界に身を投じ、多岐にわたる専門並びに管理経験を積むことができました。</p><p>現在、Parkway金融研究センターでアジア太平洋地域の投資責任者として活躍しています。</p><p>同センターの優れたリサーチ力を基に、国･地域の金融政策や経済状況をしっかり把握しテクニカル分析を活用した上の株･FX･ゴールドの高勝率トレードが堪能です。</p><p>投資家により多くの取引情報とチャンスを提供することに焦点を当てており、経験とノウハウを通じて、投資家と共に成長し、成功を目指し、未来の可能性を広げていきましょう。</p>",
  },
];
function Introduce() {
  const swiperRef = useRef();
  const [current, setCurrent] = useState(list[0]);

  const handleSlideChange = (swiper) => {
    setCurrent(list[swiper.activeIndex]);
  };

  return (
    <Container>
      <PageTitle>講師陣紹介</PageTitle>

      <section className="swiper-container">
        <div className="controller">
          <div className="left">
            <img
              src={leftArrowStop}
              onClick={() => swiperRef.current.slideTo(0)}
            />
            <img
              src={leftArrow}
              onClick={() => swiperRef.current.slidePrev()}
            />
          </div>
          <div className="name">
            <p>{current.name}</p>
          </div>
          <div className="right">
            <img
              src={rightArrow}
              onClick={() => swiperRef.current.slideNext()}
            />
            <img
              src={rightArrowStop}
              onClick={() => swiperRef.current.slideTo(list.length - 1)}
            />
          </div>
        </div>

        <Swiper
          className="my-swiper"
          pagination={{
            dynamicBullets: true,
          }}
          navigation={true}
          modules={[Pagination]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={handleSlideChange}
        >
          {list.map((item, index) => (
            <SwiperSlide key={item.name}>
              <dl>
                <dt>
                  <img src={item.image} alt=""/>
                </dt>
                <dd>
                  <div className="appointment" dangerouslySetInnerHTML={{ __html: item.appointment }}></div>
                  <div dangerouslySetInnerHTML={{ __html: item.introduce }}></div>
                </dd>
              </dl>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </Container>
  );
}

export default Introduce;
