import styled from 'styled-components';

export const StyledButton = styled.button`
	background-color: ${({ theme }) => theme.BG_L2};
	width: 9.7rem;
	height: 3.3rem;
	border: none;
	border-radius: 24px;
	color: ${({ theme }) => theme.TEXT_L1};
	cursor: pointer;

	&:hover,
	&:focus {
		filter: brightness(1.3);
	}
`;
