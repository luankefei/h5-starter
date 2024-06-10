import React, { useState } from "react";
import { Container, PageTitle, ReasonIconWrapper } from "./reason.style";
import icon1 from "../../assets/image/reason1.png";
import icon2 from "../../assets/image/reason2.png";
import icon3 from "../../assets/image/reason3.png";
import icon4 from "../../assets/image/reason4.png";

function Seminar() {
  const [isShow, setStatus] = useState(false);

  return (
    <Container>
      <PageTitle>セミナー参加のメリット</PageTitle>
      <ReasonIconWrapper>
        <ul
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <li>
            <img src={icon1} />
          </li>
          <li>
            <img src={icon2} />
          </li>
          <li>
            <img src={icon3} />
          </li>
          <li>
            <img src={icon4} />
          </li>
        </ul>
      </ReasonIconWrapper>
    </Container>
  );
}

export default Seminar;
