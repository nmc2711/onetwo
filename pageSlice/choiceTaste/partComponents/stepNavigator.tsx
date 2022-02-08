import React from 'react'

import { StepNavBox } from '../styled';

import { Text } from "@chakra-ui/layout";

function StepNavigatorComponent() {
  return (
    <StepNavBox>
      <Text color="dGray.900" fontSize="s" fontWeight="bold">1</Text>
      <Text color="dGray.600" fontSize="s" fontWeight="bold">&nbsp;/&nbsp;6</Text>
    </StepNavBox>
  )
}
export default StepNavigatorComponent
