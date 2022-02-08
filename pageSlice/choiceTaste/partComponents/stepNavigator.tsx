import React from 'react'

import { StepNavBox } from '../styled';

import { Box, Text } from "@chakra-ui/layout";

function StepNavigatorComponent() {
  return (
    <StepNavBox>
      <Text color="dGray.900">1</Text> / <Text>6</Text>
    </StepNavBox>
  )
}

export default StepNavigatorComponent
