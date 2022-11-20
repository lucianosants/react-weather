import Button from './Button';
import { StyledSuggestions, StyledContent, StyledColumn } from './styled';

export default function Suggestions({ onHandleAdd }) {
	return (
		<StyledSuggestions>
			<h2>Suggestions</h2>
			<StyledContent>
				<StyledColumn>
					<Button
						title={'New York'}
						onValue={'New York'}
						onHandleAdd={onHandleAdd}
					/>
					<Button
						title={'Moscow'}
						onValue={'Moscow'}
						onHandleAdd={onHandleAdd}
					/>
					<Button
						title={'Madrid'}
						onValue={'Madrid'}
						onHandleAdd={onHandleAdd}
					/>
				</StyledColumn>
				<StyledColumn>
					<Button
						title={'Lisbon'}
						onValue={'Lisbon'}
						onHandleAdd={onHandleAdd}
					/>
					<Button
						title={'Toronto'}
						onValue={'Toronto'}
						onHandleAdd={onHandleAdd}
					/>
					<Button
						title={'Amsterdam'}
						onValue={'Amsterdam'}
						onHandleAdd={onHandleAdd}
					/>
				</StyledColumn>
				<StyledColumn>
					<Button
						title={'São Paulo'}
						onValue={'São paulo'}
						onHandleAdd={onHandleAdd}
					/>
					<Button
						title={'London'}
						onValue={'London'}
						onHandleAdd={onHandleAdd}
					/>
					<Button
						title={'Dublin'}
						onValue={'Dublin'}
						onHandleAdd={onHandleAdd}
					/>
				</StyledColumn>
			</StyledContent>
		</StyledSuggestions>
	);
}
