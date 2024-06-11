import { Container } from "../Seminar/seminar.style";
import { PageTitle, Content, Footer } from "./toForm.style";

import aMen from "../../assets/image/a_men.png";

function ToForm() {
  return (
    <Container>
      <PageTitle>お申込者限定特典</PageTitle>

      <Content>
        <img src={aMen} alt="avator"/>
        <div className="txt">
          <p>学校では教えてくれなかった</p>
          <p>お金のことを学べる講座です</p>
        </div>
        <a href="#form">
          <button><span>投資動画</span><span>受け取る</span></button>
        </a>
      </Content>

      <Footer></Footer>
    </Container>
  )
}

export default ToForm