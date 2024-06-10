import styled from "@emotion/styled";

const NavContainer = styled.header`
	width: 100%;
	height: 66px;
	background: #fff;
	position: fixed;
	z-index: 10;
	top: 0;
	left: 0;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 11px 0 3px;
	box-sizing: border-box;

	.logo {
		width: 51%;
	}

	.menu-icon {
		width: 13.9%;
	}
`;

export { NavContainer };
