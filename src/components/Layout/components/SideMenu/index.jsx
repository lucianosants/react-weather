import Header from './Header';
import Search from './Search';
import { StyledSideMenu } from './styled';
import Suggestions from './Suggestions';

export default function SideMenu() {
	return (
		<StyledSideMenu>
			<Header />
			<Search />
			<Suggestions />
		</StyledSideMenu>
	);
}
