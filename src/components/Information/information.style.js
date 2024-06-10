import styled from "@emotion/styled";
import letterBg1 from "../../assets/image/letter-bg1.png";
import letterBg2 from "../../assets/image/letter-bg2.png";

const Container = styled.div`
	margin-top: 60px;

	.img-box {
		margin: 0 1.7rem;
		text-align: center;
		position: relative;
		height: 185px;
		overflow-y: clip;

		.lace-img {
			width: 75%;
		}

		.men-img {
			width: 48%;
			position: absolute;
			left: -0.6rem;
			top: 4rem;
		}
	}

	.letter {
		margin-top: -47px;
		position: relative;

		h4 {
			margin: 0 1.7rem;
			font-size: 1.8rem;
			text-align: center;
			padding: 7px 0;
			background: rgba(255, 255, 255, 0.7);
		}

		.content {
			position: relative;
			height: 566px;
			background: url(${letterBg1}) no-repeat;
			background-size: contain;
			padding: 2.3rem;
			margin: 0 0.6rem;
			box-sizing: border-box;

			p {
				margin: 0;
				font-size: 1.38rem;
				line-height: 2rem;
				text-indent: 1rem;
			}

			.show-more {
				color: #497cff;
				font-size: 1.53rem;
				display: inline-block;
				text-decoration: underline;
				position: absolute;
				right: 3rem;
				margin-top: 1.5rem;
			}
		}

		.long-content {
			height: 1130px;
			background-image: url(${letterBg2}), url(${letterBg1});
			background-position: top left, bottom right;
			background-repeat: no-repeat;

			.bottom {
				position: absolute;
				right: 3rem;
				margin-top: 3.5rem;
				text-align: center;

				p {
					line-height: 2.5rem;
				}
			}
		}
	}

	@media screen and (max-width: 375px) {
		.letter {
			.content {
				p {
					font-size: 1.2rem;
					line-height: 1.8rem;
				}
			}

			.long-content {
				height: 1072px;
			}
		}
	}
`;
export { Container };
