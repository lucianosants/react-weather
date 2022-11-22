import styled, { css } from 'styled-components';

export const StyledResult = styled.section`
	background-image: ${({ theme }) => theme.BG_L4};

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
		color: ${({ theme }) => theme.TEXT_L1};
		background-color: ${({ theme }) => theme.BG_L5};
		padding: 1rem 1.3rem;
		border-radius: 7px;
	}
`;

export const StyledMax_Min = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	.description {
		background-color: ${({ theme }) => theme.BG_L5};
		padding: 1rem 1.3rem;
		border-radius: 7px;
		width: 100%;
		text-align: center;

		.description__main {
			font-weight: 700;
			font-size: 1.8rem;
		}
	}

	.max__min {
		margin-top: 1.8rem;
		color: ${({ theme }) => theme.TEXT_L1};
		font-weight: 600;

		display: flex;
		align-items: center;
		gap: 19px;

		span {
			display: flex;
			align-items: center;

			background-color: ${({ theme }) => theme.BG_L5};
			padding: 1rem 1.3rem;
			border-radius: 7px;
		}
	}
`;
