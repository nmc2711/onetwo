import React from 'react'

import { StepNavBox } from '../styled';

import { Text } from "@chakra-ui/layout";

// toolkit
import { useAppSelector } from 'toolkit/hooks';

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
