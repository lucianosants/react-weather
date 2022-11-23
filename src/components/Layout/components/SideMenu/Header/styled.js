import styled from 'styled-components';

export const StyledHeader = styled.header`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

export const StyledBrand = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

	h1 {
		text-transform: uppercase;
		color: ${({ theme }) => theme.TEXT_L1};
		font-size: 2.6rem;
		letter-spacing: 0.1rem;
	}

	@media (max-width: 1020px) {
		svg {
			width: 8rem;
		}
		h1 {
			font-size: 2rem;
		}
	}
`;
