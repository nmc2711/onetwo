import React from 'react';

import Image from 'next/image';
import MyphotoImg from 'asset/detail/myphoto.png';
import UserImg from 'asset/detail/user.png';

import { Flex, Text } from "@chakra-ui/react";

function DetailSubTitleComponent() {
  return (
    <>
      <Flex alignItems="center" justify="space-between" marginBottom="32px">
        <Flex alignItems="center" fontSize="s" fontWeight="bold">
          <Image alt="사용자 이미지" width={32} height={32} src={MyphotoImg} />
          {/* <Text borderRadius="full" border="1px solid" w="16px" h="16px" textAlign="center">"</Text> */}
          <Text ml="12px" fontSize="s" fontWeight="bold">통행료 내라고</Text>
        </Flex>

        <Flex alignItems="center" h="32px" padding="4px 10px" bg="dPrimary" borderRadius="32px">
          <Image src={UserImg} width={22} height={20} alt="" />
          <Text fontSize="s" fontWeight="bold" ml="6px" color="#fff">1 /3 </Text>
        </Flex>
      </Flex>
    </>
  )
}
export default DetailSubTitleComponent
