import { Form, Button, Input } from "antd-mobile"

import { Container, PageTitle } from "../Seminar/seminar.style";
import { Head, FormContent } from "./form.style"

import error from "../../assets/image/error.png";

function FormComponent() {
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
            <Button block type='submit' color='primary' size='large'>
              上記の内容で動画を受け取る
            </Button>
          }
        >
          <Form.Item name='name' label='お名前' rules={[{ required: true }]}>
            <Input placeholder='例：山田太郎' />
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
    </Container>
  )
}

export default FormComponent