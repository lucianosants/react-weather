import Button from './Button';
import { StyledSuggestions, StyledContent, StyledColumn } from './styled';

export default function Suggestions() {
	return (
		<StyledSuggestions>
			<h2>Suggestions</h2>
			<StyledContent>
				<StyledColumn>
					<Button title={'New York'} />
					<Button title={'Moscow'} />
					<Button title={'Madrid'} />
				</StyledColumn>
				<StyledColumn>
					<Button title={'Lisbon'} />
					<Button title={'Toronto'} />
					<Button title={'Amsterdam'} />
				</StyledColumn>
				<StyledColumn>
					<Button title={'São Paulo'} />
					<Button title={'London'} />
					<Button title={'Dublin'} />
				</StyledColumn>
			</StyledContent>
		</StyledSuggestions>
	);
}
