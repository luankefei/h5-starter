import { useState } from 'react'
import Nav from "../../components/Nav/index";
import About from "../../components/About/About";
import Information from "../../components/Information/Information";
import Introduce from "../../components/Introduce/Introduce";
import Seminar from "../../components/Seminar/Seminar";
import Parkway from "../../components/Parkway/Parkway";
import ToForm from "../../components/ToForm/ToForm";
import Reason from "../../components/Reason/Reason";
import Voice from "../../components/Voice/Voice";
import CustomerVoice from "../../components/CustomerVoice/CustomerVoice";
import Form from "../../components/Form/Form";
import Faq from "../../components/Faq/Faq";

import { Container } from "./home.style";

import sortUpIcon from "../../assets/image/sort-up.png";
import image1 from "../../assets/image/image1.png";
import image2 from "../../assets/image/image2.png";
import image3 from "../../assets/image/image3.png";
import image4 from "../../assets/image/image4.png";

const scrollToBottom = () => {
  const node = document.getElementById("home-wrapper");
  node.scrollTop = node.scrollHeight;
};

const HomeComponent = () => (
  <div className="home">
    <section className="banner">
      <div className="text-content">
        <p>お金から自由な人生を</p>
        <p>コンサルティングする</p>
      </div>
    </section>

    <section className="banner-text">
      <p>わたしでもできた。</p>
      <p>そして勝てる理由がわかった。</p>
      <p>Parkway金融研究センターで。</p>
    </section>

    <section className="section">
      <ul className="image-list">
        <li>
          <a href="#about">
            <img src={image1} alt=""/>
          </a>
        </li>
        <li>
          <a href="#toForm">
            <img src={image2} alt=""/>
          </a>
        </li>
        <li>
          <a href="#introduce">
            <img src={image3} alt=""/>
          </a>
        </li>
        <li>
          <a onClick={scrollToBottom}>
            <img src={image4} alt=""/>
          </a>
        </li>
      </ul>
    </section>
  </div>
);

const Home = () => {
  const [visible, setVisible] = useState(false)
  const scrollToTop = () => {
    const node = document.getElementById("home-wrapper");
    node.scrollTop = 0;
  };

  const closePopup = () => {
    if (visible) {
      setVisible(false)
    }
  }

  const toggleVisible = (visible) => {
    setVisible(visible)
  }

  return (
    <Container id="home-wrapper">
      <Nav closePopup={closePopup}></Nav>

      <main className="main">
        <div id="home" style={{ marginTop: "-66px", paddingTop: "66px" }}>
          <HomeComponent />
        </div>
        <div id="about" style={{ marginTop: "-66px", paddingTop: "66px" }}>
          <About />
        </div>
        <div
          id="information"
          style={{ marginTop: "-66px", paddingTop: "66px" }}
        >
          <Information />
        </div>
        <div id="introduce" style={{ marginTop: "-66px", paddingTop: "66px" }}>
          <Introduce />
        </div>
        <Parkway />
        <div id="toForm" style={{ marginTop: "-66px", paddingTop: "66px" }}>
          <ToForm />
        </div>

        <div id="seminar" style={{ marginTop: "-66px", paddingTop: "66px" }}>
          <Seminar />
        </div>
        <Reason />
        <div id="reason" style={{ marginTop: "-66px", paddingTop: "66px" }}>
          <Voice />
        </div>

        <div id="voice" style={{ marginTop: "-66px", paddingTop: "66px" }}>
          <CustomerVoice />
        </div>

        <div id="form" style={{ marginTop: "-66px", paddingTop: "66px" }}>
          <Form popupVisible={visible} toggleVisible={toggleVisible}/>
        </div>
        <div id="faq" style={{ marginTop: "-66px", paddingTop: "66px" }}>
          <Faq />
        </div>
        {/* <Video /> */}
      </main>

      <div className="to-top">
        <button onClick={scrollToTop}>
          <img src={sortUpIcon} alt=""/>
        </button>
      </div>
    </Container>
  );
};

export default Home;
