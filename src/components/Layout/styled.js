import styled from 'styled-components';

export const Container = styled.main`
	background: ${({ theme }) => theme.BG_L1};
	color: ${({ theme }) => theme.TEXT_L1};
	border-radius: 12px;
	width: 90%;
	max-width: 126rem;
	padding: 2rem 3rem;
	box-shadow: 0px 0px 65px rgba(0, 0, 0, 0.5);
`;
