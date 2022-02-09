import React, { useState } from 'react';
import { isEmpty } from 'lodash';

import { SoundT } from '../enum';

import Image from 'next/image';
import { Flex, Box } from "@chakra-ui/react";

import { StepHeading, StepItem, NextButton } from '../styled';

import Union from 'asset/union/Union.png';

// toolkit
import { useAppDispatch } from 'toolkit/hooks';
import { changeSteps, changeChoiceInfo } from 'features/choice';

function SoundStepComponent() {
  // toolkit
  const dispatch = useAppDispatch();

  const [selected, setSelected] = useState('');

  const toggle = (code: string) => {
    if (selected === code) {
      setSelected('')
    } else {
      setSelected(code);
    } 
  }

  const onClickNextStep = () => {
    if (isEmpty(selected)) {
      return; 
    } else {
      dispatch(changeChoiceInfo({ sound: selected }));
      dispatch(changeSteps(6));
    }
  }
  
  return (
    <>
      <StepHeading>조용한 자리가 편하신가요?</StepHeading>
      <Flex mt="32px" flexDirection="column">
        {SoundT.map((item, idx) => {
          const { code, name } = item;
          
          let correct = selected === code;
          let isLast = SoundT.length - 1  === idx;

          return (
            <StepItem 
              key={code} 
              mb={isLast? '0' : '18px'} 
              height={selected === '' ? '212px' : correct ? '252px' : '172px'}
              color={correct ? '#fff' : 'dGray.900'}
              backgroundColor={correct ? 'dGray.900' : '#fff'}
              onClick={() => toggle(code)}
            >
              <Box>
                {correct && <Image src={Union} alt="초이스 셀렉트 로고이미지" width="14px" height="8px"/>}
              </Box>
              {name}
            </StepItem>
          )
        })}
      </Flex>
      <NextButton color={selected !== '' ? 'dPrimary' : 'dGray.500'} onClick={onClickNextStep}>다음</NextButton>
    </>
  )
}
export default SoundStepComponent
