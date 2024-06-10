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
`;
export { Container };
