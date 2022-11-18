import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai';
import { StyledFooter, StyledLinksFooter } from './styled';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<StyledFooter>
			<p>
				lucianosants © <span>{currentYear}</span>
			</p>

			<StyledLinksFooter>
				<a href='https://github.com/lucianosants' target='_blank'>
					<AiOutlineGithub size={24} />
				</a>
				<a
					href='https://www.linkedin.com/in/lucianosants/'
					target='_blank'
				>
					<AiOutlineLinkedin size={24} />
				</a>
			</StyledLinksFooter>
		</StyledFooter>
	);
}
