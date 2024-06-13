import styled from "@emotion/styled";

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
	margin-top: 10px;
`;

const GrayContent = styled.div`
	padding: 24px;
	margin: 0 12px 25px;
	background: rgba(226, 226, 226, 0.85);
	font-size: 1.2rem;
	line-height: 1.8rem;
	border-radius: 10px;

	.sub-title {
		font-size: 1.5rem;
		font-weight: bold;
		margin: 10px 0;
	}
`;

const Content = styled.div`
	margin: 0 25px 30px;
	padding: 6px 11px;
	background: #fff;
	border: 1px solid rgba(0, 131, 13, 1);

	.sub-title {
		font-size: 1.5rem;
		font-weight: bold;
		color: red;
		margin-bottom: 20px;
	}

	span {
		display: block;
	}

	p {
		font-size: 16px;
		line-height: 1.8rem;
		margin-top: 0;
		margin-bottom: 15px;
	}

	img {
		width: 100%;
	}
`;

export { Container, PageTitle, Content, GrayContent };
