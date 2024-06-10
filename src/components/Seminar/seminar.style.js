import styled from "@emotion/styled";
// import letterBg1 from "../../assets/image/letter-bg1.png";
// import letterBg2 from "../../assets/image/letter-bg2.png";

import lace1 from "../../assets/image/lace1.png";

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
  margin-top: 60px;
`;

const Content = styled.div`
  margin: 0 25px;
  padding: 6px 11px;
  background: #fff;
  border: 1px solid red;

  .sub-title {
    font-size: 1.5rem;
    font-weight: bold;

    .highlight {
      color: #8d4bf6;
    }
  }

  p {
    font-size: 1.2rem;
    line-height: 1.8rem;
    margin-top: 0;
    margin-bottom: 20px;
  }
`;

export { Container, PageTitle, Content };
