import Logo from './Logo';
import { StyledHeader, StyledBrand } from './styled';

export default function Header() {
	return (
		<StyledHeader>
			<StyledBrand>
				<Logo />
				<h1>React Weather</h1>
			</StyledBrand>
		</StyledHeader>
	);
}
