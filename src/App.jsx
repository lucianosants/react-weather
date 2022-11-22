import { ThemeProvider } from 'styled-components';

import ProviderWrapper, {
	ThemeAppContext,
	ThemeAppProvider,
} from './context/ThemeAppContext';

import { dark } from './styles/themes/dark';
import { light } from './styles/themes/light';

import { GlobalStyles } from './styles/GlobalStyles';
import Layout from './components/Layout';
import { useContext } from 'react';

function MyApp() {
	const context = useContext(ThemeAppContext);
	const currentTheme = { light, dark };

	return (
		<div className='App'>
			<ThemeProvider theme={currentTheme[context.theme]}>
				<GlobalStyles />
				<Layout />
			</ThemeProvider>
		</div>
	);
}

function App() {
	return (
		<ProviderWrapper>
			<MyApp />
		</ProviderWrapper>
	);
}

export default App;
