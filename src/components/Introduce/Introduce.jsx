import { Swiper, SwiperSlide } from "swiper/react";
import { Container } from './introduce.style'

const list = [
  {
    name: 'KING センター長',
    image: '',
    introduce: '<p>香港大学のMBA学位を持ち、20年以上にわたるグローバル金融市場のバックグラウンドと、16年間のトレーダーとしての取引経験を持っています。また、複数の上場企業の高級役員として勤務し、資産と財富管理、ブローカー業、クレジット、保険、および小売および機構金融サービスの専門知識を積み重ねています。</p><p>現在は、Parkway Groupの創設者として、株式、固定所得、通貨、および商品市場のクライアントに基本的な洞察と分析、また幅広い金融投資および実行サービスを提供しています。</p>'
  },
  {
    name: '木村 達也 副センター長',
    image: '',
    introduce: '<p>MBA卒業、25歳に起業してから事業経営一筋。</p><p>専門投資家10年、株式＆FX＆コンサルタントとして活躍。</p><p>収益が億超える後とにかく手堅く負けない投資スタイルを実現。</p><p>個人投資家としては、波動上昇の起点を捉えて利益あげることが得意、また、短・中・長期トレード向きのファンダメンタルズとテクニカルを融合させた独自開発の取引システム「ダブルドラゴン」+「ローソク足の裏わざ」を使用することによって、相場の売買転換の臨界点を見極めることができているため、取引実積抜群！</p>'
  },
  {
    name: 'KING  センター長',
    image: '',
    introduce: '<p>香港大学のMBA学位を持ち、20年以上にわたるグローバル金融市場のバックグラウンドと、16年間のトレーダーとしての取引経験を持っています。また、複数の上場企業の高級役員として勤務し、資産と財富管理、ブローカー業、クレジット、保険、および小売および機構金融サービスの専門知識を積み重ねています。</p><p>現在は、Parkway Groupの創設者として、株式、固定所得、通貨、および商品市場のクライアントに基本的な洞察と分析、また幅広い金融投資および実行サービスを提供しています。</p>'
  },
  {
    name: 'KING  センター長',
    image: '',
    introduce: '<p>香港大学のMBA学位を持ち、20年以上にわたるグローバル金融市場のバックグラウンドと、16年間のトレーダーとしての取引経験を持っています。また、複数の上場企業の高級役員として勤務し、資産と財富管理、ブローカー業、クレジット、保険、および小売および機構金融サービスの専門知識を積み重ねています。</p><p>現在は、Parkway Groupの創設者として、株式、固定所得、通貨、および商品市場のクライアントに基本的な洞察と分析、また幅広い金融投資および実行サービスを提供しています。</p>'
  }
]
function Introduce() {
  return (
    <Container>
      <h4>講師陣紹介</h4>

      <section className="swiper-container">
        <Swiper className="mySwiper">
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </section>
    </Container>
  )
}

export default Introduce