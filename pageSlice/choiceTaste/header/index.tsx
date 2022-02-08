import React from 'react';

import { Flex, Text, Box } from "@chakra-ui/react";

import Image from 'next/image';

import CrossThumbImg from 'asset/logo/Logos.png';

// toolkit
import { useAppDispatch } from 'toolkit/hooks';
import { checker } from 'features/choice';

function ChoiceHeaderComponent() {
  // toolkit
  const dispatch = useAppDispatch();
  
  return (
    <Flex justifyContent="center" alignItems="center">
      
      <Box width="70px" height="32px">
        <Image src={CrossThumbImg} alt="초이스 셀렉트 로고이미지" />
      </Box>

      <Text ml="auto" fontSize="m" fontWeight="bold" onClick={() => dispatch(checker())}>나중에 할래요</Text>
    </Flex>
  )
}

export default ChoiceHeaderComponent
