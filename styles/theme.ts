import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { createBreakpoints, mode } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '480px',
  lg: '760px',
  xl: '1280px',
})

const theme = extendTheme({ 
  config,
  breakpoints,
  fonts: {
    body: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, sans-serif',
  },
  fontSizes: {
    xxxl: '28px',
    xxl: '24px',
    xl: '20px',
    l: '18px',
    m: '16px',
    s: '14px',
    xs: '12px',
  },
  colors: {
    dGray: {
      900: ['#222222', 'rgba(34,34,34,0)'],
      800: ['rgba(34,34,34,0.75)', 'rgba(34,34,34,0.85)'],
      700: ['rgba(34,34,34,0.6)', 'rgba(34,34,34,0.7)'],
      600: ['rgba(34,34,34,0.4)', 'rgba(34,34,34,0.5)'],
      500: ['rgba(34,34,34,0.25)', 'rgba(34,34,34,0.45)'],
      400: ['rgba(34,34,34,0.15)', 'rgba(34,34,34,0.15)'],
      300: ['rgba(34,34,34,0.08)', 'rgba(34,34,34,0.35)'],
      200: ['rgba(34,34,34,0.03)', 'rgba(34,34,34,0.08)',],
      100: ['rgba(34,34,34,0.02)', 'rgba(34,34,34,0.06)'],
      0: ['rgba(34,34,34,0)', 'rgba(34,34,34,0.03)'],
    },
    dRed: {
      500: ['#E12418', '#E12418'],
    },
    dBg: {
      dark: ['#222222', '#222222'],
      gradientRed: '#e83d3d',
      gradientYellow: '#DBAA0C',
      gradientBlue: '#09B5B5',
      gradientPurple: '#8E5DDE',
      lightWhite: '#ffffff',
    },
    dPrimary: ['#7BC600', '#7BC600', '#fff'],
  },
});

export default theme;