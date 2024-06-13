import styled from "@emotion/styled";
// import letterBg1 from "../../assets/image/letter-bg1.png";
// import letterBg2 from "../../assets/image/letter-bg2.png";
import letterBgBottom from "../../assets/image/letter_bg3.png";
import letterBg2 from "../../assets/image/letter_bg7.jpg";
// import letterBg3 from "../../assets/image/letter_bg5.png";

const Container = styled.div`
  margin-top: 30px;

  .img-box {
    margin: 0 1.7rem;
    text-align: center;
    position: relative;
    height: 185px;
    overflow-y: clip;

    .lace-img {
      width: 75%;
    }

    .men-img {
      width: 48%;
      position: absolute;
      left: -0.6rem;
      top: 4rem;
    }
  }

  .letter {
    margin-top: -47px;
    position: relative;

    h4 {
      margin: 0 1.7rem;
      font-size: 1.8rem;
      text-align: center;
      padding: 7px 0;
      background: rgba(255, 255, 255, 0.7);
    }

    .content {
      position: relative;
      height: 566px;
      background: url(${letterBgBottom}) no-repeat;
      background-size: contain;
      padding: 2.3rem;
      margin: 0 0.6rem;
      box-sizing: border-box;

      p {
        margin: 0;
        font-size: 1.3rem;
        line-height: 1.8rem;
      }

      .show-more {
        color: #497cff;
        font-size: 1.53rem;
        display: inline-block;
        text-decoration: underline;
        position: absolute;
        right: 3rem;
        margin-top: 1.5rem;
      }
    }

    .long-content {
      height: 1125px;
      background-image: url(${letterBg2}), url(${letterBgBottom});
      background-position: top left, bottom right;
      background-repeat: no-repeat;

      p {
        margin-bottom: 15px;
      }

      .bottom {
        position: absolute;
        right: 3rem;
        margin-top: 2rem;
        text-align: center;

        p {
          line-height: 2rem;
        }
      }
    }
  }

  @media screen and (min-width: 375px) and (max-width: 400px) {
    .letter {
      .content {
        p {
          font-size: 1.2rem;
          line-height: 1.8rem;
        }
      }

      .long-content {
        height: 1050px;

        .bottom {
          margin-top: 1.2rem;

          p {
            line-height: 1.6rem;
          }
        }
      }
    }
  }
`;
export { Container };
