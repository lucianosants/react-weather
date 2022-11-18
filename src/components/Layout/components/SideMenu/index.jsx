import { StyledSideMenu } from './styled';

import Header from './Header';
import Search from './Search';
import Suggestions from './Suggestions';
import ToggleTheme from './ToggleTheme';
import Footer from './Footer';

export default function SideMenu() {
	return (
		<StyledSideMenu>
			<Header />
			<Search />
			<Suggestions />
			<ToggleTheme />
			<Footer />
		</StyledSideMenu>
	);
}
