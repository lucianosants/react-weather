import styled from 'styled-components';

export const StyledResult = styled.section`
	background-color: ${({ bg }) => bg};
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

export const StyledDate = styled.div`
	margin-bottom: 1.8rem;
`;

export const StyledWeather = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;

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
	}
`;
