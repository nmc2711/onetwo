import React from 'react';

import { useAppSelector } from 'toolkit/hooks';

import GenderStepComponent from './gender';
import PriceStepComponent from './price';
import DrinkStepComponent from './drink';
import HealthyStepComponent from './healthy';
import SoundStepComponent from './sound';
import TimeStepComponent from './time';

function StepComponent() {
  // toolkit
  const { steps } = useAppSelector((state) => state.choice);

  const SwitchComponent = () => {
    switch (steps) {
      case 1:
        return <GenderStepComponent />;
      case 2:
        return <PriceStepComponent />;
      case 3:
        return <DrinkStepComponent />;
      case 4:
        return <HealthyStepComponent />;
      case 5:
        return <SoundStepComponent />;
      case 6:
        return <TimeStepComponent />;
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
