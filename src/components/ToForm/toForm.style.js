import styled from "@emotion/styled";
import lace1 from "../../assets/image/lace1.png";
import lace2 from "../../assets/image/lace2.png";

const PageTitle = styled.h4`
	width: 75%;
	padding-top: 40px;
	padding-bottom: 10px;
	height: 42px;
	margin: auto;
	text-align: center;
	background: url(${lace1}) no-repeat center;
	background-size: contain;
	font-size: 1.8rem;
`;

const Content = styled.div`
	background: #fff;
	position: relative;
	overflow: hidden;
	height: 199px;

	img {
		width: 44%;
		position: absolute;
		bottom: -60px;
	}

	p {
		margin: 0;
		font-size: 1.23rem;
		line-hegiht: 1.8rem;
		font-weight: 700;
	}

	.txt {
		text-align: right;
		margin-top: 25px;
		margin-right: 36px;
	}

	button {
		position: absolute;
		width: 167px;
		height: 68px;
		box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
		border: none;
		bottom: 30px;
		right: 36px;
		background: #36c773;
		border-radius: 50px;

		span {
			display: block;
			color: #fff;
			font-weight: 700;
			font-size: 1.2rem;
		}
	}
`;

const Footer = styled.footer`
	width: 75%;
	height: 92px;
	margin: auto;
	text-align: center;
	background: url(${lace2}) no-repeat center;
	background-size: contain;
	margin-top: -40px;
`;

export { PageTitle, Content, Footer };
