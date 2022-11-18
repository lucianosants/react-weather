import { StyledSideMenu } from './styled';

import Header from './Header';
import Search from './Search';
import Suggestions from './Suggestions';
import ToggleTheme from './ToggleTheme';

export default function SideMenu() {
	return (
		<StyledSideMenu>
			<Header />
			<Search />
			<Suggestions />
			<ToggleTheme />
		</StyledSideMenu>
	);
}
