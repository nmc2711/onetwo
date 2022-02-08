import { extendTheme } from "@chakra-ui/react";
import { createBreakpoints } from '@chakra-ui/theme-tools';

import colors from './colors';
import Button from "./components/button";
import fonts from './fonts';

const breakpoints = createBreakpoints({
  sm: '320px',
  md: '480px',
  lg: '760px',
  xl: '1280px',
})

const fontSizes = {
  xxxl: '28px',
  xxl: '24px',
  xl: '20px',
  l: '18px',
  m: '16px',
  s: '14px',
  xs: '12px',
}

const customTheme = extendTheme({
  fonts,
  colors,
  breakpoints,
  fontSizes,
  components: {
    Button,
  },
});

export default customTheme;