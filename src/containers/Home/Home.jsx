import Nav from "../../components/Nav/index";
import About from "../../components/About/About";

import { Container } from "./home.style";
import sortUpIcon from "../../assets/image/sort-up.png";
import image1 from "../../assets/image/image1.png";
import image2 from "../../assets/image/image2.png";
import image3 from "../../assets/image/image3.png";
import image4 from "../../assets/image/image4.png";
import Information from "../../components/Information/Information";

const onNavClick = (index) => () => {
  console.log("kjkkjkf", index);
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
        <li onClick={onNavClick(0)}>
          <img src={image1} />
        </li>
        <li onClick={onNavClick(1)}>
          <img src={image2} />
        </li>
        <li onClick={onNavClick(2)}>
          <img src={image3} />
        </li>
        <li onClick={onNavClick(3)}>
          <img src={image4} />
        </li>
      </ul>
    </section>
  </div>
);

const Home = () => {
  const scrollToTop = () => {
    const node = document.getElementById("home-wrapper");
    node.scrollTop = 0;
  };

  return (
    <Container id="home-wrapper">
      <Nav></Nav>

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
          <div style={{ height: "300px" }}>Section 3</div>
        </div>
        <div id="seminar" style={{ marginTop: "-66px", paddingTop: "66px" }}>
          <div style={{ height: "300px" }}>Section 4</div>
        </div>
        <div id="reason" style={{ marginTop: "-66px", paddingTop: "66px" }}>
          <div style={{ height: "300px" }}>Section 5</div>
        </div>
        <div id="voice" style={{ marginTop: "-66px", paddingTop: "66px" }}>
          <div style={{ height: "300px" }}>Section 6</div>
        </div>
      </main>
      <div className="to-top">
        <button onClick={scrollToTop}>
          <img src={sortUpIcon} />
        </button>
      </div>
    </Container>
  );
};

export default Home;
