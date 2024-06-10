import styled from "@emotion/styled";

import lace1 from "../../assets/image/lace1.png";

const Container = styled.div`
	padding: 0 1.7rem;

	h4 {
		width: 75%;
		height: 108px;
		line-height: 108px;
		position: relative;
		left: 0;
		right: 0;
		margin: auto;
		text-align: center;
		background: url(${lace1}) no-repeat center;
		background-size: contain;
		font-size: 1.8rem;
		box-sizing: border-box;
		padding-top: 10px;
	}

	section {
		background: rgba(226, 226, 226, 0.85);
		border-radius: 20px;
		margin-bottom: 34px;
		padding: 36px 21px 12px;
		text-align: center;

		b {
			font-size: 1.5rem;
			font-weight: 600;
			margin-bottom: 12px;
			display: block;
		}

		p {
			font-size: 1.2rem;
			line-height: 30px;
			margin: 0;
		}
	}
`;

export { Container };
