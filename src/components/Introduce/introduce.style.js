import styled from "@emotion/styled";

const Container = styled.div`
	margin-top: 1.5rem;

	.my-swiper {
		background: #fff;

		dl {
			text-align: center;
			margin: 0;
			padding: 1.9rem 1.7rem 3rem;
		}

		dt {
			img {
				width: 160px;
				border-radius: 1px;
			}
		}

		dd {
			margin: 0;
			margin-top: 50px;
			height: 330px;
			overflow-y: auto;

			p {
				font-size: 1.38rem;
				margin: 0;
				line-height: 2rem;
			}
		}
	}

	.controller {
		width: 100%;
		display: flex;
		padding: 0 28px;
		justify-content: space-between;
		margin-bottom: 15px;
		box-sizing: border-box;
		align-items: center;

		.left,
		.right {
			height: 1.84rem;

			img {
				width: 1.84rem;
			}
		}

		.name {
			max-width: 248px;

			p {
				width: 100%;
				font-size: 1.8rem;
				margin: 0;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
		}
	}

	.swiper-pagination {
		width: 105px !important;
		left: 45% !important;

		.swiper-pagination-bullet {
			width: 15px;
			height: 15px;
		}

		.swiper-pagination-bullet-active {
			width: 30px;
			background: #9b9b9b;
			border-radius: 20px;
		}
	}

	@media screen and (max-width: 375px) {
		.controller {
			.name {
				max-width: 222px;

				p {
					font-size: 1.5rem;
				}
			}
		}

		.my-swiper {
			dd p {
				font-size: 1.2rem;
			}
		}
	}
`;

export { Container };
