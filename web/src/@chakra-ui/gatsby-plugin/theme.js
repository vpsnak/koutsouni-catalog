import {extendTheme} from '@chakra-ui/react'

const BREAKPOINTS = [20, 48, 75, 96, 121, 159]
const MIN_FONT = 0.85
const XS_MULTIPLIER = 0.552
const S_MULTIPLIER = 0.452
const M_MULTIPLIER = 0.659
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
      body: {
        fontSize: 'base'
      }
    }
  },
  colors: {
    black: '#333333',
    'play-down': '#9b9b9b',
    background: '#f7f7f7',
    accent: '#ef7f80'
  },
  space: {
    xs: '2px',
    sm: '4px',
    md: '8px',
    lg: '1rem'
  },
  fontSizes: {
    'sm': '0.75rem',
    'base': '0.875rem',
    'md': '1rem',
    'lg': '1.125rem',
    'xl': '1.5rem'
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
