import { useState, useEffect } from "react";
import { Form, Button, Input, Popup } from "antd-mobile"

import { Container, PageTitle } from "../Seminar/seminar.style";
import { Head, FormContent } from "./form.style"

import error from "../../assets/image/error.png";
import play from "../../assets/image/play.png"
import social from "../../assets/image/social.png"

function FormComponent({ popupVisible, toggleVisible }) {
  const [videoVisible, setVideoVisible] = useState(false)

  useEffect(() => {
    if (!popupVisible) {
      setVideoVisible(false)
    }
  }, [popupVisible])

  return (
    <Container>
      <PageTitle>投資動画の受け取りはこちら</PageTitle>

      <Head>
        <div className="center">
          <p>※予告なく無料公開を終了する場合がございます。</p>
          <p>あらかじめご了承ください。</p>
        </div>

        <div className="left">
          <p>下記お申し込み後、10分以内に</p>
          <p><span>toushi@parkway-market.com</span></p>
          <p>から動画視聴のためのURLがメールで届きます。 お忘れにならないよう先にメールで動画を受け取り、土日や夜などお時間があるときにご覧ください。</p>
        </div>
      </Head>

      <FormContent>
        <Form
          name='form'
          footer={
            <Button block type='submit' color='primary' size='large' onClick={() => toggleVisible(true)}>
              上記の内容で動画を受け取る
            </Button>
          }
        >
          <Form.Item name='name' label='お名前' rules={[{ required: true }]}>
            <Input placeholder='例：山田太郎'/>
          </Form.Item>
          <Form.Item name='ruby' label='ふりがな' rules={[{ required: true }]}>
            <Input placeholder='例：やまだたろう' />
          </Form.Item>
          <Form.Item name='email' label='メールアドレス' rules={[{ required: true }]}>
            <Input placeholder='softbannk、i.cloud以外' />
          </Form.Item>
          <div className="tips">
            <span>※ご返答までに最大2営業日かかる場合があります。</span>
          </div>
          <Form.Item name='phone' label='携帯番号' rules={[{ required: true }]}>
            <Input placeholder='09000001111' />
          </Form.Item>
          <div className="tips">
            <div className="box">
              <img src={error}/>
              <p>期間限定の無料公開により、不正なお申し込みを防止するため必要になります。</p>
            </div>
            <span>※メールエラーの場合はショートメッセージをお送りいたします。</span>
          </div>

          <div className="txt">
            <b>ボタンを押すと、すぐにメールで動画視聴リンクが届きます。 好きな時間に好きな場所でゆっくりお楽しみください。</b>
          </div>
        </Form>
      </FormContent>

      <Popup
        visible={popupVisible}
        mask={false}
        className="my-form-popup"
      >
        <div className="form-content">
          <p>XX　XX様</p>
          <p>「Parkway金融研究センター」へのお申し込みありがとうございます！</p>
        </div>

        <div className="form-content">
          <p>XX様がこの動画が見ると？</p> 
          <p>・真っ当な投資方法が分かる！</p> 
          <p>・投資でお金を増やす方法が分かる！ </p>
          <p>・経済的自由にグッと近づく！ </p>
          <p>・これから儲かる投資先が分かるようになる！</p>
        </div>

        <div className="form-footer">
          <Button className="form-btn" onClick={() => setVideoVisible(true)}>
            <span>今すぐ動画を見る方は</span>
            <span>こちらをクリックしてください</span>
          </Button>
        </div>
      </Popup>

      <Popup
        visible={videoVisible}
        mask={false}
        className="my-form-popup"
      >
        <div className="form-content">
          <p>———— 　動画視聴　————</p>
        </div>

        <div className="video">
          <div className="play-btn">
            <img src={play} alt=""/>
          </div>
        </div>

        <div className="social">
        <img src={social} alt=""/>
        </div>

        <div className="form-content">
          <p>Parkwayからの特別なお知らせ！</p> 
          <p>特別なお知らせがございますので、</p> 
          <p>ぜひ最後までご視聴ください。 </p>
        </div>

        {/* <div className="form-footer">
          <Button className="form-btn">
            <span>今すぐ動画を見る方は</span>
          </Button>
        </div> */}
      </Popup>
    </Container>
  )
}

export default FormComponent