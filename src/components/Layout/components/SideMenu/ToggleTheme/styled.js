import styled from 'styled-components';

export const StyledToggleTheme = styled.div`
	border: 0;
	padding: 0.3rem;
	width: 100%;
	display: flex;
	justify-content: space-around;

	label {
		display: flex;
		justify-content: center;
		background-color: ${({ theme }) => theme.BG_L3};
		border: 5px solid ${({ theme }) => theme.BG_L2};
		border-radius: 7px;
		cursor: pointer;
		position: relative;
	}
	span {
		display: flex;
		gap: 1.6rem;
		width: 12.6rem;
		height: 4rem;
		align-items: center;
		justify-content: center;
		color: ${({ theme }) => theme.TEXT_L1};
		background-color: ${({ theme }) => theme.BG_L2};

		svg {
			fill: ${({ theme }) => theme.TEXT_L1};
		}
	}
	label:before {
		content: '';
		background-color: ${({ theme }) => theme.BG_L3};
		border: 1px solid ${({ theme }) => theme.BG_L3};
		opacity: 0.7;
		width: 12.6rem;
		height: 4rem;
		border-radius: 7px;
		position: absolute;
		top: -0.1rem;
		bottom: 0;
		left: 0.4rem;
		transition: 0.3s;
		cursor: pointer;
	}
	input[type='checkbox'] {
		display: none;
	}
	input[type='checkbox']:checked + label:before {
		transform: translateX(90%);
	}

	@media (max-width: 665px) {
		margin-top: 1.8rem;
	}
`;
