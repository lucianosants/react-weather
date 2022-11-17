import Header from './Header';
import Search from './Search';
import { StyledSideMenu } from './styled';

export default function SideMenu() {
	return (
		<StyledSideMenu>
			<Header />
			<Search />
		</StyledSideMenu>
	);
}
