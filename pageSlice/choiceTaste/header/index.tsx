import React from 'react';

// toolkit
import { useAppDispatch } from 'toolkit/hooks';
import { checker } from 'features/choice';

import { Flex, Text, Box } from "@chakra-ui/react";
import Image from 'next/image';

import LogoImg from 'asset/logo/Logos.png';

function ChoiceHeaderComponent() {
  const dispatch = useAppDispatch();
  
  return (
    <Flex justifyContent="center" alignItems="center">
      
      <Box width="70px" height="32px">
        <Image src={LogoImg} alt="초이스 셀렉트 로고이미지" />
      </Box>

      <Text ml="auto" fontSize="m" fontWeight="bold" onClick={() => dispatch(checker())}>나중에 할래요</Text>
    </Flex>
  )
}
export default ChoiceHeaderComponent;
