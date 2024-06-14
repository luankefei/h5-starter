import styled from "@emotion/styled";

import lace1 from "../../assets/image/lace1.png";

const PageTitleWrapper = styled.div`
  background: #f2f2f2;
`;

const PageTitle = styled.h4`
  width: 75%;
  padding-top: 110px;
  padding-bottom: 10px;
  height: 42px;

  margin: auto;
  text-align: center;
  background: url(${lace1}) no-repeat center;
  background-size: contain;
  font-size: 1.8rem;
`;

const Container = styled.div`
  img {
    width: 100%;
    margin: 0;
    padding: 0;
  }
`;

const Footer = styled.div`
  width: 100vw;
  height: 35.46vw;
  overflow: hidden;
`;

// const GrayContent = styled.div`
//   padding: 24px;
//   // margin: 0 12px 25px;
//   background: rgba(226, 226, 226, 0.85);
//   font-size: 1.2rem;
//   line-height: 1.8rem;
//   border-radius: 10px;

//   .sub-title {
//     font-size: 1.5rem;
//     font-weight: bold;
//   }
// `;

const Content = styled.div`
  // margin: 0 25px 30px;
  padding: 13px 25px;
  background: rgba(232, 232, 232, 1);
  // border: 1px solid rgba(0, 131, 13, 1);

  .sub-title {
    font-size: 1.5rem;
    font-weight: bold;
    color: red;
    margin-bottom: 20px;
  }

  p {
    font-size: 14px;
    // font-family: Raleway;
    line-height: 18px;

    margin-top: 0;
    margin-bottom: 20px;
    color: rgba(77, 77, 77, 1);

    .underline {
      text-decoration: underline;
      font-weight: 700;
    }
  }
`;

export { Container, PageTitle, PageTitleWrapper, Content, Footer };
