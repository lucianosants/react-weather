import { ThemeProvider } from 'styled-components';

import { dark } from './styles/themes/dark';

import { GlobalStyles } from './styles/GlobalStyles';
import Layout from './components/Layout';

function App() {
	return (
		<div className='App'>
			<ThemeProvider theme={dark}>
				<GlobalStyles />
				<Layout />
			</ThemeProvider>
		</div>
	);
}

export default App;
