import styled from "@emotion/styled";

const Head = styled.div`
  width: 80%;
  margin: auto;

  p {
    margin: 0;
    font-size: 1rem;
    line-height: 1.38rem;
    color: #4d4d4d;
  }

  .center {
    text-align: center;

    p {
      font-size: 0.92rem;
      font-weight: 700;
    }
  }

  .left {
    margin-top: 20px;

    span {
      color: #1045ff;
    }
  }
`;

const FormContent = styled.div`
  background: #fff;
  margin-top: 14px;
  border: none;
  padding: 0 55px;

  .adm-form-item-required-asterisk {
    left: initial;
  }

  .adm-form-item-label {
    font-family: Source Sans Pro;
    font-size: 1.2rem;
    font-weight: 600;
    color: #09101d;
  }

  .adm-form-item-child-inner {
    border: 1px solid #858c94;
    border-radius: 8px;
    padding: 6px 16px;
    margin-top: 8px;
  }

  .adm-list-item-content {
    border: none;
  }

  .adm-list-body {
    border: none;
  }

  .invalid {
    .adm-form-item-child-inner {
      border-color: red;
    }
  }

  .tips {
    padding-left: 1.4rem;

    .box {
      height: 52px;
      background: #ebeef2;
      border-radius: 8px;
      padding: 6px 16px;
      display: flex;
      box-sizing: border-box;
      margin-bottom: 8px;

      img {
        width: 16px;
        height: 16px;
        margin-right: 4px;
      }

      p {
        font-size: 1rem;
        margin: 0;
      }
    }

    span {
      font-size: 0.9rem;
      color: #09101d;
    }
  }

  .txt {
    width: 90%;
    margin: auto;
    margin-top: 23px;

    b {
      font-size: 1.2rem;
    }
  }

  .adm-form-footer {
    button {
      border: none;
      margin: auto;
      width: 77%;
      height: 45px;
      background: #36c773;
      color: #fff;
      font-size: 1rem;
      font-weight: 700;
      border-radius: 50px;
    }
  }

  @media screen and (min-width: 375px) and (max-width: 400px) {
    .tips {
      .box {
        padding: 8px 12px;

        img {
          width: 14px;
          height: 14px;
          margin-right: 4px;
        }

        p {
          font-size: 0.8rem;
        }
      }

      span {
        font-size: 0.8rem;
      }
    }
  }
`;

export { Head, FormContent };
