import { createContext, useState } from 'react';

export const ThemeAppContext = createContext({
	theme: '',
	setTheme: () => {},
});

export function ThemeAppProvider({ children, initialValue }) {
	const [theme, setTheme] = useState(initialValue);

	return (
		<ThemeAppContext.Provider
			value={{
				theme: theme,
				setTheme: setTheme,
			}}
		>
			{children}
		</ThemeAppContext.Provider>
	);
}

export default function ProviderWrapper({ children }) {
	return (
		<ThemeAppProvider initialValue={'dark'}>{children}</ThemeAppProvider>
	);
}
