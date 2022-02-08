import { extendTheme, ThemeConfig } from '@chakra-ui/react';
import { createBreakpoints } from '@chakra-ui/theme-tools';

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
      900: '#222222',
      800: 'rgba(34,34,34,0.75)',
      700: 'rgba(34,34,34,0.6)',
      600: 'rgba(34,34,34,0.4)',
      500: 'rgba(34,34,34,0.25)',
      400: 'rgba(34,34,34,0.15)',
      300: 'rgba(34,34,34,0.08)',
      200: 'rgba(34,34,34,0.03)',
      100: 'rgba(34,34,34,0.02)',
      0: 'rgba(34,34,34,0)',
    },
    dRed: {
      500: '#E12418',
    },
    dBg: {
      dark: '#222222',
      gradientRed: '#e83d3d',
      gradientYellow: '#DBAA0C',
      gradientBlue: '#09B5B5',
      gradientPurple: '#8E5DDE',
      lightWhite: '#ffffff',
    },
    dPrimary: '#7BC600',
  },
});

export default theme;