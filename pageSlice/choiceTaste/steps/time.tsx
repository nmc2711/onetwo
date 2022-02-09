import React, { useState } from 'react';
import { isEmpty } from 'lodash';

import { TimeT } from '../enum';

import Image from 'next/image';
import { Flex, Box } from "@chakra-ui/react";

import { StepHeading, StepItem, NextButton } from '../styled';

import Union from 'asset/union/Union.png';

// toolkit
import { useAppDispatch } from 'toolkit/hooks';
import { checker, changeChoiceInfo } from 'features/choice';

function TimeStepComponent() {
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
      dispatch(changeChoiceInfo({ time: selected }));
      dispatch(checker())
    }
  }
  
  return (
    <>
      <StepHeading>어느 시간대가 편하신가요?</StepHeading>
      <Flex mt="32px" flexDirection="column">
        {TimeT.map((item, idx) => {
          const { code, name } = item;
          
          let correct = selected === code;
          let isLast = TimeT.length - 1  === idx;

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
      <NextButton color={selected !== '' ? 'dPrimary' : 'dGray.500'} onClick={onClickNextStep}>저장하기</NextButton>
    </>
  )
}
export default TimeStepComponent