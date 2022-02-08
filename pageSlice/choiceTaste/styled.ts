import styled from 'styled-components';

import { chakra, Flex, Image } from "@chakra-ui/react";

export const ChoiceWrap = chakra(Flex, {
  baseStyle: {
    flexDirection: 'row',
    minHeight: '100vh',
    padding: '0 20px',
  },
});

export const StepNavBox = chakra(Flex, {
  baseStyle: {
    width: '26px',
    height: '24px',
  },
});

