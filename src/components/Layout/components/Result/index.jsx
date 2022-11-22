import { FaMapMarkerAlt } from 'react-icons/fa';
import { BsThermometerHigh, BsThermometerLow } from 'react-icons/bs';

import {
	StyledLocation,
	StyledMax_Min,
	StyledResult,
	StyledWeather,
} from './styled';

import cloud from '/icons/cloud.svg';
import thunderstorm from '/icons/thunderstorm.svg';
import drizzle from '/icons/drizzle.svg';
import rain from '/icons/rain.svg';
import snow from '/icons/snow.svg';
import clear from '/icons/clear.svg';
import mist from '/icons/mist.svg';

export default function Result({ data }) {
	let currentIcon;

	if (data.weather) {
		if (data.weather[0].main === 'Clouds') currentIcon = cloud;
		if (data.weather[0].main === 'Thunderstorm') currentIcon = thunderstorm;
		if (data.weather[0].main === 'Drizzle') currentIcon = drizzle;
		if (data.weather[0].main === 'Rain') currentIcon = rain;
		if (data.weather[0].main === 'Snow') currentIcon = snow;
		if (data.weather[0].main === 'Clear') currentIcon = clear;
		if (data.weather[0].main === 'Mist') currentIcon = mist;
	}

	return (
		<StyledResult>
			<StyledLocation>
				<FaMapMarkerAlt size={26} />
				<h2>{data.name}</h2>
			</StyledLocation>

			{data.main && (
				<StyledWeather>
					<img src={currentIcon} alt='Icon relative to condition' />

					<div>
						<h2>{data.main.temp.toFixed()}</h2>
						<strong>&deg;C</strong>
					</div>

					<p>
						Feels like: {data.main.feels_like.toFixed()}
						&deg;C
					</p>
				</StyledWeather>
			)}

			<StyledMax_Min>
				{data.weather && (
					<div className='description'>
						<p className='description__main'>
							{data.weather[0].main}
						</p>
						<p>{data.weather[0].description}</p>
					</div>
				)}

				{data.main && (
					<div className='max__min'>
						<span>
							<BsThermometerHigh />
							{data.main.temp_max.toFixed()}&deg;C
						</span>

						<span>
							<BsThermometerLow />
							{data.main.temp_min.toFixed()}&deg;C
						</span>
					</div>
				)}
			</StyledMax_Min>
		</StyledResult>
	);
}
