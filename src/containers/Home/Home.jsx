import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import {
  // Navigation,
  Pagination,
  // Scrollbar,
  // A11y,
  // Autoplay,
} from "swiper/modules";

// import { Element, Link, animateScroll as scroll } from "react-scroll";

import Nav from "../../components/Nav/index";
import About from "../../components/About/About";
import Infromation from "../../components/Information/Information";

import { Container } from "./home.style";
import sortUpIcon from "../../assets/image/sort-up.png";
import image1 from "../../assets/image/image1.png";
import image2 from "../../assets/image/image2.png";
import image3 from "../../assets/image/image3.png";
import image4 from "../../assets/image/image4.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

const Home = () => {
  // const swiper = useSwiper();
  const [swiper, setSwiper] = useState(null);
  // const scrollToTop = () => {
  //   console.log(111);
  //   scroll.scrollToTop();
  // };

  const scrollToTop = () => {
    console.log("swiper", swiper);
    swiper.slideTo(0);
  };

  return (
    <Container>
      <Nav></Nav>

      <main className="main">
        <Swiper
          modules={[Pagination]}
          // navigation
          direction={"vertical"}
          // touchRatio={0.1}
          autoHeight={true}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true, clickable: true }}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          onSlideChange={() => console.log("slide change")}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          // autoplayDisableOnInteraction={false}
        >
          <SwiperSlide>
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
                    {/* <Link to="about" smooth={true} offset={-66} duration={500}> */}
                    <img src={image1} />
                    {/* </Link> */}
                  </li>
                  <li>
                    {/* <Link to="about" smooth={true} offset={-66} duration={500}> */}
                    <img src={image2} />
                    {/* </Link> */}
                  </li>
                  <li>
                    {/* <Link to="about" smooth={true} offset={-66} duration={500}> */}
                    <img src={image3} />
                    {/* </Link> */}
                  </li>
                  <li>
                    {/* <Link to="about" smooth={true} offset={-66} duration={500}> */}
                    <img src={image4} />
                    {/* </Link> */}
                  </li>
                </ul>
              </section>
            </div>
          </SwiperSlide>

          <SwiperSlide name="about">
            <About />
          </SwiperSlide>
          <SwiperSlide name="information">
            <Infromation />
          </SwiperSlide>
          <SwiperSlide name="introduce">
            <div style={{ height: "300px" }}>Section 3</div>
          </SwiperSlide>
          <SwiperSlide name="seminar">
            <div style={{ height: "300px" }}>Section 4</div>
          </SwiperSlide>
          <SwiperSlide name="reason">
            <div style={{ height: "300px" }}>Section 5</div>
          </SwiperSlide>
          <SwiperSlide name="voice">
            <div style={{ height: "300px" }}>Section 6</div>
          </SwiperSlide>
        </Swiper>
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
