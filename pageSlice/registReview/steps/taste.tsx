import React from 'react';

import { Flex, Text, Box } from "@chakra-ui/react";
import { TasteHeader, TasteRowWrap } from '../styled';

function TasteComponent() {
  return (
    <Flex>
      <TasteHeader>
        <Text fontWeight="800" fontSize="xxl" color="dGray.900" letterSpacing="-0.5px">이 음식점의 키워드를 <br />선택해주세요</Text>
      </TasteHeader>
      
      <TasteRowWrap></TasteRowWrap>
    </Flex>
  )
}
export default TasteComponent;
