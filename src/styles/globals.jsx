import { css, Global } from "@emotion/react";

import logo from "../assets/image/logo.png";
const prefix = "https://d2dfipunm8t5y9.cloudfront.net/ingroup-official";

export const globalStyles = (
  <Global
    styles={css`
      @font-face {
        font-family: Raleway, Infra;
        font-weight: 400;
        src: url(/font/InfraRegular.otf);
      }

      @font-face {
        font-family: Raleway, Infra;
        font-weight: 500;
        src: url(/font/InfraMedium.otf);
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
        font-family: Raleway, Infra, Arial, Helvetica, sans-serif;
        color: #111111;
        transition: background 0.5s;
        overflow: hidden;
        margin: 0;
        font-size: 28px;
        background-color: #fff;
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

      .loading {
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
      }

      @keyframes loadingDot {
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
      }

      .hover-area {
        opacity: 0;
        width: 320px;
        height: 260px;
        position: absolute;
        cursor: pointer;
      }

      .nav-popup-body,.nav-popup {
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
    `}
  ></Global>
);

export default {
  globalStyles,
};
