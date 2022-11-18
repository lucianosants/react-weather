import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { StyledToggleTheme } from './styled';

export default function ToggleTheme() {
	return (
		<div>
			<StyledToggleTheme>
				<input
					id='darkmode'
					type='checkbox'
					onChange={() => console.log('changed')}
				/>
				<label htmlFor='darkmode' className='darkmode-switch'>
					<span>
						<MdOutlineLightMode size={26} />
						Light
					</span>
					<span>
						<MdOutlineDarkMode size={26} /> Dark
					</span>
				</label>
			</StyledToggleTheme>
		</div>
	);
}
