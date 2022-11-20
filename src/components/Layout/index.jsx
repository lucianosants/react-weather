import { useEffect, useState } from 'react';

import { StyledContainer } from './styled';

import Result from './components/Result';
import SideMenu from './components/SideMenu';

export default function Layout() {
	const [search, setSearch] = useState('são paulo');
	const [query, setQuery] = useState('');
	const [data, setData] = useState([]);

	const API_KEY = import.meta.env.VITE_API_KEY;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${API_KEY}`;

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearch(query);
	};

	const HandleAdd = (e) => {
		setQuery(e.target.value);
		setSearch(e.target.value);
	};

	useEffect(() => {
		const getWeather = async () => {
			await fetch(url)
				.then((res) => res.json())
				.then((data) => {
					setData(data);
				});
		};

		getWeather();
	}, [search]);

	return (
		<StyledContainer>
			<SideMenu
				query={query}
				onHandleSubmit={(e) => handleSubmit(e)}
				setQuery={setQuery}
				onHandleAdd={(e) => HandleAdd(e)}
			/>
			<Result data={data} />
		</StyledContainer>
	);
}
