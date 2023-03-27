import { blue, grey, lightBlue} from '@mui/material/colors';

export const themeColors = (mode) => ({
	palette: {
			mode,
			...(mode === 'light'
					? {
							// palette values for light mode
							primary: {
									main: blue[500],
									white: "#fff"
							},
							secondary: {
									main: lightBlue[800],
									midNightBlue: "#003366"
							},
					}
					: {
							// palette values for dark mode
							primary: {
									main: "#003366",
									white: "#fff"
							},
							secondary: {
									main: blue[500],
									midNightBlue: "#2196f3"
							},
							background: {
									default: "#1e1e1e",
							},
							text: {
									primary: '#8c8c8c',
									secondary: grey[500],
							},
					}),
	},
});