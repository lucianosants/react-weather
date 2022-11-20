import { AiOutlineSearch } from 'react-icons/ai';
import { StyledSearch } from './styled';

export default function Search({ onHandleSubmit, query, setQuery }) {
	return (
		<StyledSearch onSubmit={onHandleSubmit}>
			<input
				type='text'
				name='search'
				id='search'
				value={query}
				onChange={(e) => setQuery(e.target.value)}
				placeholder='Enter city...'
				autoComplete='off'
			/>
			<button type='submit'>
				<AiOutlineSearch size={26} />
			</button>
		</StyledSearch>
	);
}
