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
  colors: {
    gray: {
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
  },
  modes: {
    dark: {
      colors: {
        gray: {
          900: 'rgba(34,34,34,0)',
          800: 'rgba(34,34,34,0.85)',
          700: 'rgba(34,34,34,0.7)',
          600: 'rgba(34,34,34,0.5)',
          500: 'rgba(34,34,34,0.45)',
          400: 'rgba(34,34,34,0.15)',
          300: 'rgba(34,34,34,0.35)',
          200: 'rgba(34,34,34,0.08)',
          100: 'rgba(34,34,34,0.06)',
          0: 'rgba(34,34,34,0.03)',
        }
      }
    }
  },
});

export default theme;