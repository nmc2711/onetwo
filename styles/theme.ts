import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true,
};

const theme = extendTheme({ 
  config,
  fonts: {
    body: 'Inter, system-ui, sans-serif',
  },
});

export default theme;