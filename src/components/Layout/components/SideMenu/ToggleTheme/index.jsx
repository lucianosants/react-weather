import { useContext } from 'react';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';
import { ThemeAppContext } from '../../../../../context/ThemeAppContext';
import { StyledToggleTheme } from './styled';

export default function ToggleTheme() {
	const context = useContext(ThemeAppContext);

	const handleToggleTheme = () => {
		if (context.theme === 'light') context.setTheme('dark');
		if (context.theme === 'dark') context.setTheme('light');
	};

	return (
		<div>
			<StyledToggleTheme>
				<input
					id='darkmode'
					type='checkbox'
					onChange={handleToggleTheme}
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
