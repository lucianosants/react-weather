import { AiOutlineSearch } from 'react-icons/ai';
import { StyledSearch } from './styled';

export default function Search() {
	return (
		<StyledSearch>
			<input
				type='text'
				name='search'
				id='search'
				placeholder='Type for city...'
				autoComplete='off'
			/>
			<button type='submit'>
				<AiOutlineSearch size={26} />
			</button>
		</StyledSearch>
	);
}
