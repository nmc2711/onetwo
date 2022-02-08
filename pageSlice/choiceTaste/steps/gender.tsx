import React, { useState } from 'react';

import { GenderT } from '../enum';

import Image from 'next/image';

import { Flex, Box } from "@chakra-ui/react";

import { StepHeading, StepItem, NextButton } from '../styled';

import Union from 'asset/union/Union.png';

function GenderStepComponent() {
  const [selected, setSelected] = useState('');

  const toggle = (code: string) => {
    if (selected === code) {
      setSelected('')
    } else {
      setSelected(code);
    } 
  }
  return (
    <>
      <StepHeading>성별을 알려주세요</StepHeading>
      <Flex mt="32px" flexDirection="column">
        {GenderT.map((item, idx) => {
          const { code, name } = item;
          return (
            <StepItem 
              key={code} 
              mb={GenderT.length - 1  === idx ? '0' : '18px'} 
              height={selected === '' ? '136px' : selected === code ? '208px' : '100px'}
              color={selected === code ? '#fff' : 'dGray.900'}
              backgroundColor={selected === code ? 'dGray.900' : '#fff'}
              onClick={() => toggle(code)}
            >
              <Box>
                {selected === code && <Image src={Union} alt="초이스 셀렉트 로고이미지"/>}
              </Box>
              {name}
            </StepItem>
          )
        })}
      </Flex>
      <NextButton color={selected !== '' ? 'dPrimary' : 'dGray.500'}>다음</NextButton>
    </>
  )
}
export default GenderStepComponent
