import styled from "@emotion/styled";
import lace1 from "../../assets/image/lace1.png";

const Container = styled.div`
	margin-top: 50px;
`;

const PageTitle = styled.h4`
	width: 75%;
	padding-top: 60px;
	padding-bottom: 10px;
	height: 42px;

	margin: auto;
	text-align: center;
	background: url(${lace1}) no-repeat center;
	background-size: contain;
	font-size: 1.8rem;
`;

const Content = styled.div`
	width: 94%;
	margin: auto;
	background: #e1e1e1;
	padding: 28px 10px;
	box-sizing: border-box;
	border-radius: 20px;
	margin-bottom: 30px;

	p {
		margin: 0;
		font-size: 18px;
		line-height: 2.3rem;
	}

	.line {
		margin-top: 30px;
		width: 88%;
		border-bottom: 1px dashed #000;
		position: relative;

		&:after {
			content: "";
			position: absolute;
			width: 24px;
			height: 4px;
			background: #000;
			border-radius: 4px;
			transform: rotate(117.55deg);
			right: -32px;
			top: -19px;
		}
	}

	dl {
		display: flex;
		margin-bottom: 0;

		img {
			width: 65px;
			vertical-align: middle;
		}

		dd {
			margin: auto 0;
			margin-left: 21px;

			p {
				font-size: 1.53rem;
				margin-bottom: 10px;
			}

			span {
				color: #696969;
				font-size: 1.38rem;
				display: inline-block;
				margin-right: 20px;
			}
		}
	}
`;

export { Container, PageTitle, Content };
