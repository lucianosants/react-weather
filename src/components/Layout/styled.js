import styled from 'styled-components';

export const StyledContainer = styled.main`
	background: ${({ theme }) => theme.BG_L1};
	color: ${({ theme }) => theme.TEXT_L1};
	border-radius: 12px;
	width: 90%;
	display: flex;
	max-width: 126rem;
	box-shadow: 0px 0px 65px rgba(0, 0, 0, 0.5);
	overflow-x: hidden;

	@media (max-width: 665px) {
		flex-direction: column;
		height: 100%;
		width: 100%;
		border-radius: 0;
	}
`;
