import { useEffect, useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { StyledSearch } from './styled';

export default function Search() {
	// const [query, setQuery] = useState('picos');
	// const [data, setData] = useState([]);

	// const API_KEY = import.meta.env.VITE_API_KEY;
	// const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${API_KEY}`;

	// useEffect(() => {
	// 	const getWeather = async () => {
	// 		const response = await fetch(url)
	// 			.then((res) => res.json())
	// 			.then((data) => {
	// 				setData(data);
	// 			});
	// 	};

	// 	getWeather();
	// }, []);

	// console.log(data);

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
