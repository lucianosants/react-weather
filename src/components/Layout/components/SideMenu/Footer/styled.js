import styled from 'styled-components';

export const StyledFooter = styled.footer`
	background-color: ${({ theme }) => theme.BG_L2};
	justify-content: space-between;
	display: flex;
	align-items: center;
	padding: 1.8rem 1.2rem;
	border-radius: 7px;
	margin-top: 1.6rem;
`;

export const StyledLinksFooter = styled.footer`
	display: flex;
	align-items: center;
	gap: 1.6rem;

	a {
		color: ${({ theme }) => theme.TEXT_L1};
		display: flex;

		&:hover {
			svg {
				fill: ${({ theme }) => theme.TEXT_L2};
			}
		}
	}
`;
