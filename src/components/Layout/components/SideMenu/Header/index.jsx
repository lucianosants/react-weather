import Logo from './Logo';
import { StyledHeader, StyledBall, StyledBrand } from './styled';

export default function Header() {
	return (
		<StyledHeader>
			<div>
				<StyledBall bgColor={'#FB0E2E'}></StyledBall>
				<StyledBall bgColor={'#F9B100'}></StyledBall>
				<StyledBall bgColor={'#00D374'}></StyledBall>
			</div>
			<StyledBrand>
				<Logo />
				<h1>React Weather</h1>
			</StyledBrand>
		</StyledHeader>
	);
}
