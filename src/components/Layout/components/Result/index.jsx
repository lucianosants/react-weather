import { FaMapMarkerAlt } from 'react-icons/fa';
import {
	BsFillCloudDrizzleFill,
	BsThermometerHigh,
	BsThermometerLow,
} from 'react-icons/bs';
import {
	StyledDate,
	StyledLocation,
	StyledMax_Min,
	StyledResult,
	StyledWeather,
} from './styled';

export default function Result() {
	return (
		<StyledResult bg={'#43033c'}>
			<StyledLocation>
				<FaMapMarkerAlt size={26} />
				<h2>Some City</h2>
			</StyledLocation>

			<StyledDate>
				<p> Sunday, Nov 20, 2022 </p>
			</StyledDate>

			<StyledWeather>
				<BsFillCloudDrizzleFill size={130} />

				<div>
					<h2>29</h2>
					<strong>&deg;C</strong>
				</div>
			</StyledWeather>

			<StyledMax_Min>
				<p>Cloudy</p>

				<div className='max__min'>
					<span>
						<BsThermometerHigh />
						32&deg;C
					</span>
					<span> | </span>
					<span>
						<BsThermometerLow />
						22&deg;C
					</span>
				</div>
			</StyledMax_Min>
		</StyledResult>
	);
}
