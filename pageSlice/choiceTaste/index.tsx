import React from 'react';

import ChoiceHeaderComponent from './header';
import StepNavigatorComponent from './partComponents/stepNavigator';
import Steps from './steps';

import { ChoiceWrap } from './styled';

function ChoiceTasteComponent() {
  return (
    <ChoiceWrap>
      <ChoiceHeaderComponent />
      <StepNavigatorComponent />
      <Steps />
    </ChoiceWrap>
  )
}

export default ChoiceTasteComponent
