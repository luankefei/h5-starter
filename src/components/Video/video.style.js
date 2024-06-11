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
  margin-top: 10px;

  img {
    width: 100%;
  }
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
    font-size: 12px;
    font-family: Raleway;
    font-weight: 700;
    line-height: 18px;

    margin-top: 0;
    margin-bottom: 20px;
    color: rgba(77, 77, 77, 1);

    .underline {
      text-decoration: underline;
    }
  }
`;

const QrCodeWrapper = styled.div`
  text-align: center;

  .btn-qrcode {
    width: 250px;
    height: 45px;
    background: rgba(54, 199, 115, 1);
    font-family: Oxygen;
    font-size: 13px;
    font-weight: 700;
    line-height: 19.5px;
    text-align: center;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 22px;
    border: none;
    margin: 0 auto;
  }

  .qrcode-image {
    width: 270px;
    height: 270px;
  }
`;

export { Container, PageTitle, PageTitleWrapper, Content, QrCodeWrapper };
