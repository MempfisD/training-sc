import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
	*,
	*::before,
	*::after {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}

	body {
		font-family: 'Inter', sans-serif;
		height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
	}
`