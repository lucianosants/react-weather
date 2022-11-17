import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const StyledBall = styled.span`
	background-color: ${({ bgColor }) => bgColor};
	padding: 0.1rem;
	margin-right: 1.5rem;
	clip-path: circle();
	padding: 0.6rem;
	cursor: not-allowed;
`;

export const StyledBrand = styled.div`
	display: flex;
	justify-content: space-between;
	font-size: 2.6rem;
	align-items: center;
	margin-top: 3rem;

	h1 {
		text-transform: uppercase;
	}
`;
