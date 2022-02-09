import React from 'react';

import { useAppSelector } from 'toolkit/hooks';

import GenderStepComponent from './gender';
import PriceStepComponent from './price';

function StepComponent() {
  // toolkit
  const { steps } = useAppSelector((state) => state.choice);

  const SwitchComponent = () => {
    switch (steps) {
      case 1:
        return <GenderStepComponent />;
      case 2:
        return <PriceStepComponent />;
      default:
        break;
    }
  }

  return (
    <>
      {SwitchComponent()}
    </>
  )
}

export default StepComponent
