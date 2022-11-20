import styled from 'styled-components';

export const StyledSearch = styled.form`
	display: flex;
	border-radius: 7px;
	border: 3px solid ${({ theme }) => theme.BG_L2};
	background-color: ${({ theme }) => theme.BG_L3};
	margin-top: 2.6rem;

	input {
		width: 100%;
		height: 100%;
		background: transparent;
		border: 1px solid transparent;
		padding: 1.3rem;

		color: ${({ theme }) => theme.TEXT_L1};
		font-size: 1.6rem;
		font-weight: 700;

		&::placeholder {
			color: ${({ theme }) => theme.TEXT_L2};
		}

		&:focus {
			background-color: ${({ theme }) => theme.BG_L1};
		}

		&:-webkit-autofill {
			border: 1px solid ${({ theme }) => theme.BG_L2};
			-webkit-box-shadow: 0 0 0px 1000px ${({ theme }) => theme.BG_L3}
				inset;
			-webkit-text-fill-color: ${({ theme }) => theme.TEXT_L2};
		}
	}

	button {
		width: 7rem;
		background-color: ${({ theme }) => theme.BG_L2};
		border: none;
		border-radius: 0px 5px 5px 0px;
		cursor: pointer;

		svg {
			fill: ${({ theme }) => theme.TEXT_L1};
		}

		&:hover,
		&:focus {
			filter: brightness(1.2);
		}
	}
`;
