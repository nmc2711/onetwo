import { useColorMode } from '@chakra-ui/color-mode';

function choiceColor() {
  const { colorMode } = useColorMode();

  const isDark = colorMode === 'dark';
  
  const extendedColors = {
    dGray: {
      900: isDark ? 'rgba(34,34,34,0)' : '#222222',
      800: isDark ? 'rgba(34,34,34,0.85)' : 'rgba(34,34,34,0.75)',
      700: isDark ? 'rgba(34,34,34,0.7)' :'rgba(34,34,34,0.6)',
      600: isDark ? 'rgba(34,34,34,0.5)' : 'rgba(34,34,34,0.4)',
      500: isDark ? 'rgba(34,34,34,0.45)' : 'rgba(34,34,34,0.25)',
      400: isDark ? 'rgba(34,34,34,0.15)' : 'rgba(34,34,34,0.15)',
      300: isDark ? 'rgba(34,34,34,0.35)' :'rgba(34,34,34,0.08)',
      200: isDark ? 'rgba(34,34,34,0.08)' : 'rgba(34,34,34,0.03)',
      100: isDark ? 'rgba(34,34,34,0.06)' : 'rgba(34,34,34,0.02)',
      0: isDark ? 'rgba(34,34,34,0.03)' : 'rgba(34,34,34,0)',
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
  };

  return extendedColors;
}

export default choiceColor
