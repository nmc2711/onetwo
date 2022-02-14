import React from 'react'

import { useAppSelector } from 'toolkit/hooks';

import { Text } from "@chakra-ui/layout";

import { StepNavBox } from '../styled';

function StepNavigatorComponent() {
  const { steps } = useAppSelector((state) => state.choice);
  
  return (
    <StepNavBox>
      <Text color="dGray.900" fontSize="s" fontWeight="bold">{steps}</Text>
      <Text color="dGray.600" fontSize="s" fontWeight="bold">&nbsp;/&nbsp;6</Text>
    </StepNavBox>
  )
}
export default StepNavigatorComponent
