import { extendTheme } from '@chakra-ui/react'

const theme = {
	fonts: {
		body: 'Roboto, sans-serif',
		heading: 'Tahoma, sans-serif'
	},
	colors: {
		brand: {
			white: '#fffffe',
			card: '#16161a'
		}
	},
	// sizes: {
	// 	xl: {
	// 		h: '56px',
	// 		fontSize: 'lg',
	// 		px: '32px',
	// 		bg: '#9747FF'
	// 	}
	// },
	styles: {
		global: {
			body: {
				bg: '#242629',
				color: '#fffffe'
			},
			p: {
				color: '#fffffe'
			}
		}
	}
}

export default extendTheme(theme)
