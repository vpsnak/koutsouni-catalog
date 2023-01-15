import {extendTheme} from '@chakra-ui/react'

const BREAKPOINTS = [20, 48, 75, 96, 121, 159]
const MIN_FONT = 0.85
const XS_MULTIPLIER = 0.552
const S_MULTIPLIER = 0.452
const M_MULTIPLIER = 0.501
const L_MULTIPLIER = 0.628
const MAX_FONT = 1.838

const theme = {
	styles: {
		global: {
			'html': {
				fontSize: '0.51rem',
				'@media screen and (min-width: 480px)': {
					fontSize: `calc(${MIN_FONT * XS_MULTIPLIER}rem + (${MAX_FONT * XS_MULTIPLIER} - ${MIN_FONT * XS_MULTIPLIER}) * (100vw - ${BREAKPOINTS[0]}rem) / (${BREAKPOINTS[5]} - ${BREAKPOINTS[0]}))`
				},
				'@media screen and (min-width: 1000px)': {
					fontSize: `calc(${MIN_FONT * S_MULTIPLIER}rem + (${MAX_FONT * S_MULTIPLIER} - ${MIN_FONT * S_MULTIPLIER}) * (100vw - ${BREAKPOINTS[0]}rem) / (${BREAKPOINTS[5]} - ${BREAKPOINTS[0]}))`
				},
				'@media screen and (min-width: 1400px)': {
					fontSize: `calc(${MIN_FONT * M_MULTIPLIER}rem + (${MAX_FONT * M_MULTIPLIER} - ${MIN_FONT * M_MULTIPLIER}) * (100vw - ${BREAKPOINTS[0]}rem) / (${BREAKPOINTS[5]} - ${BREAKPOINTS[0]}))`
				},
				'@media screen and (min-width: 2400px)': {
					fontSize: `calc(${MIN_FONT * L_MULTIPLIER}rem + (${MAX_FONT * L_MULTIPLIER} - ${MIN_FONT * L_MULTIPLIER}) * (100vw - ${BREAKPOINTS[0]}rem) / (${BREAKPOINTS[5]} - ${BREAKPOINTS[0]}))`
				},
				'@media screen and (min-width: 2550px)': {
					fontSize: '1.122rem'
				}
			},
		},
	},
	colors: {
		black: '#190F0F',
		accent: '#ef7f80',
	},
	fontSizes: {
		'md': '20px'
	},
	components: {
		Container: {
			sizes: {
				full: {
					maxW: '955px',
					paddingX: '20px'
				}
			},
			defaultProps: {
				size: 'full'
			}
		}
	}
}

export default extendTheme(theme)
