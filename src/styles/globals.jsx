import { css, Global } from "@emotion/react";

import logo from "../assets/image/logo.png";
// import font from "../assets/MS+Mincho.TTF.ttf";
const prefix = "https://d2dfipunm8t5y9.cloudfront.net/ingroup-official";

const FONT_URL =
  "https://clock-in-img.oss-cn-hangzhou.aliyuncs.com/gw_mincho.ttf";

// console.log("font", font);

export const globalStyles = (
  <Global
    styles={css`
      @font-face {
        font-family: "MS Mincho";
        font-weight: Regular;
        src: url(${FONT_URL}) format("truetype");
      }

      ul,
      li {
        list-style: none;
        margin: 0;
        padding: 0;
      }

      html {
        font-size: 13px;
        overscroll-behavior-x: none;
        overflow: hidden;
      }

      body {
        background: #f5f5f5;
        font-family: "MS Mintro", "Times New Roman", Raleway, Infra, Arial,
          Helvetica, sans-serif;
        color: #111111;
        transition: background 0.5s;
        overflow: hidden;
        margin: 0;
        font-size: 28px;
        background-color: #f4f4f4;
      }

      .webgl {
        position: fixed;
        top: 0;
        left: 0;
        outline: none;
      }

      .cancel {
        width: 32px;
        height: 32px;
        margin-top: -16px;
        margin-left: -16px;
        position: absolute;
        z-index: -1;
        display: none;
      }

      .loading-page {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #f5f7f5;
        z-index: 100;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      /* .loading {
        background-image: url(${prefix}/img/loading2.png);
        width: 2160px;
        height: 1350px;
        animation: loading 1s steps(1) infinite;
        position: absolute;
        opacity: 1;
        transform: scale(0.7);
        z-index: 200;
      }

      .loading-content {
        position: absolute;
        bottom: 60px;
        left: 60px;
        text-align: center;
        font-size: 0.85714286rem;

        &::after {
          animation: loadingDot 2s 0s steps(1) forwards;
          animation-iteration-count: infinite;
          content: "...";
        }
      } */

      /* @keyframes loadingDot {
        0% {
          content: "";
        }

        25% {
          content: ".";
        }

        50% {
          content: "..";
        }

        75% {
          content: "...";
        }
      }

      .loading-finish {
        background-image: url(${prefix}/img/loading_finish2.png);
        width: 2160px;
        height: 1350px;
        animation: loadingEnd 0.8s 0s steps(1) forwards;
        animation-play-state: paused;
        opacity: 0;
        position: absolute;
        transform: scale(0.7);
      } */

      /* .hover-area {
        opacity: 0;
        width: 320px;
        height: 260px;
        position: absolute;
        cursor: pointer;
      } */

      .nav-popup-body,
      .nav-popup {
        top: 66px;
      }

      .adm-popup-body-position-right:before {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        background: url(${logo}) no-repeat;
        background-position-y: calc((100% / 2) - 60px);
        background-size: 100%;
        opacity: 0.25;
      }

      .nav-list,
      .adm-list-body,
      .adm-list-body-inner,
      .adm-list-item {
        background: none;
      }

      .nav-list {
        a {
          text-decoration: none;
        }

        .adm-list-item {
          padding: 0;
        }
      }

      .my-form-popup {
        z-index: 500;

        .adm-popup-body {
          top: 66px;
        }

        .form-content {
          width: 92%;
          margin: 0 auto;
          text-align: center;
          margin-bottom: 68px;

          &:first-of-type {
            margin-top: 24px;
          }

          p {
            font-size: 1.38rem;
            margin: 0;
            line-height: 2rem;
          }
        }

        .form-footer {
          width: 100%;
        }

        .form-btn {
          width: 67%;
          height: 75px;
          background: linear-gradient(92.79deg, #f7d73f 5.08%, #ecba20 95.74%);
          border: none;
          outline: none;
          text-align: center;
          border-radius: 50px;
          margin: 0 auto;
          display: block;

          span {
            display: block;
            font-size: 1.3rem;
            font-weight: 700;
          }
        }

        .video {
          width: 76%;
          margin: auto;
          border: 1px solid #000;
          border-radius: 5px;
          background: #fbfafc;
          height: 215px;
          position: relative;

          .play-btn {
            width: 60px;
            height: 60px;
            border: 1px solid #676767;
            border-radius: 50%;
            margin: auto;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              width: 35px;
              margin-left: 10px;
            }
          }
        }

        .social {
          width: 76%;
          margin: auto;

          img {
            width: 100%;
          }
        }
      }
    `}
  ></Global>
);

export default globalStyles;
