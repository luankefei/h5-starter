import styled from "@emotion/styled";

const Content = styled.div`
	dl {
		position: relative;
		padding: 0 0.7rem;

		dt {
			position: absolute;
			top: -33px;
			left: 0.7rem;

			img {
				width: 57px;
			}
		}

		dd {
			background: rgba(240, 240, 240, 0.9);
			box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.25);
			padding: 1.2rem 0.8rem;
			border-radius: 20px;

			p {
				margin: 0;
				font-size: 1.2rem;
				line-height: 1.8rem;
			}

			span {
				position: relative;
				z-index: 2;

				&:after {
					content: "";
					width: 100%;
					height: 14px;
					left: 0;
					top: 8px;
					position: absolute;
					background: #abe98f;
					z-index: -1;
				}
			}
		}
	}
`;

export { Content };
