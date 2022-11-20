import { StyledButton } from './styled';

export default function Button({ title, onValue, onHandleAdd }) {
	return (
		<StyledButton type='button' value={onValue} onClick={onHandleAdd}>
			{title}
		</StyledButton>
	);
}
