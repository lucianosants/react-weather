import styled from 'styled-components';

export const StyledResult = styled.section`
	background-color: ${({ bg }) => bg};
	color: ${({ theme }) => theme.TEXT_L1};
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 2rem;
	flex-basis: 60%;
`;

export const StyledLocation = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 1.8rem;

	h2 {
		margin-top: 3rem;
	}
`;

export const StyledWeather = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	margin-bottom: 1.8rem;

	div {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
		h2 {
			margin-top: 1.8rem;
			font-size: 5.2rem;
		}

		strong {
			font-size: 1.8rem;
		}
	}
	p {
		font-size: 2.2rem;
		color: ${({ theme }) => theme.TEXT_L2};
	}
`;

export const StyledMax_Min = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.max__min {
		margin-top: 1.8rem;
		color: ${({ theme }) => theme.TEXT_L2};
		font-weight: 600;

		display: flex;
		align-items: center;

		span {
			display: flex;
			align-items: center;
		}
	}
`;
