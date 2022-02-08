import type { DeepPartial, Theme } from "@chakra-ui/react";

/** extend additional color here */
const extendedColors = {
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
};

/** override chakra colors here */
const overridenChakraColors: DeepPartial<Theme["colors"]> = {};

const colors = {
  ...overridenChakraColors,
  ...extendedColors,
};

export default colors;