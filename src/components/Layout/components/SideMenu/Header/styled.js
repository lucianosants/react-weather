import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const StyledBall = styled.span`
	background-color: ${({ bgColor }) => bgColor};
	margin-right: 1.5rem;
	clip-path: circle();
	padding: 0.6rem;
	cursor: not-allowed;
`;

export const StyledBrand = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 3rem;

	h1 {
		text-transform: uppercase;
		color: ${({ theme }) => theme.TEXT_L1};
		font-size: 2.6rem;
		letter-spacing: 0.1rem;
	}
`;
