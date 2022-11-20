import Result from './components/Result';
import SideMenu from './components/SideMenu';
import { StyledContainer } from './styled';

export default function Layout() {
	return (
		<StyledContainer>
			<SideMenu />
			<Result />
		</StyledContainer>
	);
}
