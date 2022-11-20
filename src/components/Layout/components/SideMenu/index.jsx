import { StyledSideMenu } from './styled';

import Header from './Header';
import Search from './Search';
import Suggestions from './Suggestions';
import ToggleTheme from './ToggleTheme';
import Footer from './Footer';

export default function SideMenu({ onHandleSubmit, query, setQuery }) {
	return (
		<StyledSideMenu>
			<Header />
			<Search
				onHandleSubmit={onHandleSubmit}
				query={query}
				setQuery={setQuery}
			/>
			<Suggestions />
			<ToggleTheme />
			<Footer />
		</StyledSideMenu>
	);
}
