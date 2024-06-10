import styled from "@emotion/styled";
import bg from "../../assets/image/bg.png";
import homeBg from "../../assets/image/home-bg.png";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bg}) no-repeat;
  background-size: cover;
  overflow-y: auto;
  // overflow: hidden;

  .main {
    // padding-top: 66px;
    margin-top: 66px;
    // overflow: hidden;
  }

  .swiper {
    width: 100%;
    // height: 100%;
  }

  .swiper-slide {
    // text-align: center;
    // font-size: 18px;
    // background: #fff;

    /* Center slide text vertically */
    // display: flex;
    // justify-content: center;
    // align-items: center;
  }

  // .swiper-slide img {
  //   display: block;
  //   width: 100%;
  //   height: 100%;
  //   object-fit: cover;
  // }

  .home {
    width: 100%;

    .banner {
      height: 286px;
      background: url(${homeBg}) no-repeat;
      background-size: cover;
      position: relative;
    }

    .text-content {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 72%;
      background: rgba(255, 255, 255, 0.67);
      padding: 1rem;

      p {
        color: #096019;
        font-weight: 800;
        font-size: 2rem;
        line-height: 3.2rem;
        margin: 0;
      }
    }

    .banner-text {
      margin-top: 2rem;
      padding: 0 1rem;

      p {
        margin: 0;
        font-size: 1.8rem;
        line-height: 2.7rem;
      }
    }

    .section {
      margin-bottom: 40px;
    }

    .image-list {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding: 0 1.5rem;
      margin-top: 2.8rem;

      li {
        width: 48%;
        margin-bottom: 12px;

        img {
          width: 100%;
        }
      }
    }
  }

  .to-top {
    position: fixed;
    z-index: 999;
    right: 11px;
    bottom: 46px;
    width: 60px;
    height: 60px;

    button {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      border: none;
      background-color: #fff;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      width: 70%;
    }
  }
`;

export { Container };
