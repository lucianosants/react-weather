import { useEffect, useState } from 'react';

import { StyledContainer } from './styled';

import Result from './components/Result';
import SideMenu from './components/SideMenu';

export default function Layout() {
	const [query, setQuery] = useState('sao paulo');
	const [data, setData] = useState([]);

	const API_KEY = import.meta.env.VITE_API_KEY;
	const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=${API_KEY}`;

	useEffect(() => {
		const getWeather = async () => {
			await fetch(url)
				.then((res) => res.json())
				.then((data) => {
					setData(data);
				});
		};

		getWeather();
	}, []);

	return (
		<StyledContainer>
			<SideMenu />
			<Result data={data} />
		</StyledContainer>
	);
}
