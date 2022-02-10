import React from 'react';

import { Flex, Box, Text } from "@chakra-ui/react";
import Image from 'next/image';

import ArrowWhiteImg from 'asset/union/arrow_white_s.png';

function ScrollReviewBanner() {
  return (
    <Flex bg="dPrimary" height="100px" m="0px 20px" p="16px 24px" borderRadius="12px" flexDirection="column"  position="fixed" bottom="-20px" w="calc(100% - 40px)" transition= 'bottom 1s linear' >
      <Flex alignItems="center" >
        <Text h="28px" backgroundColor="#fff" borderRadius="38px" p="2px 14px" fontSize="s" fontWeight="bold" lineHeight="24px" mr="8px">필독</Text> 

        <Text fontSize="xl" fontWeight="800" color="#fff">첫 리뷰를 남겨보세요</Text>

        <Box ml="auto" w="16px" h="16px">
          <Image src={ArrowWhiteImg} alt="화살표 이미지" />
        </Box>
      </Flex>
    </Flex>
  )
}

export default ScrollReviewBanner;
