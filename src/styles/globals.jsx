import { css, Global } from "@emotion/react";

const prefix = "https://d2dfipunm8t5y9.cloudfront.net/ingroup-official";

export const globalStyles = (
  <Global
    styles={css`
      @font-face {
        font-family: Infra;
        font-weight: 400;
        src: url(/font/InfraRegular.otf);
        /* src: url(/font/InfraLight.otf); */
      }

      @font-face {
        font-family: Infra;
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
        font-size: 28px;
        overscroll-behavior-x: none;
        overflow: hidden;
      }

      body {
        /* background: #eff1ef; */
        background: #f5f5f5;
        /* background: rgb(239, 241, 239); */
        /* background: rgb(245, 245, 245); */
        font-family: Infra, Arial, Helvetica, sans-serif;
        color: #111111;
        transition: background 0.5s;
        overflow: hidden;
        margin: 0;
        font-size: 28px;
      }

      body.dark {
        background-color: #a7a7a7;
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
        /* display: none; */
      }

      .loading-content {
        position: absolute;
        bottom: 60px;
        left: 60px;
        text-align: center;
        font-size: 0.85714286rem;
        /* color: #ccd2cc; */

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
        /* animation: loadingEnd 3s 0s steps(1) forwards; */
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
    `}
  ></Global>
);

export default {
  globalStyles,
};
