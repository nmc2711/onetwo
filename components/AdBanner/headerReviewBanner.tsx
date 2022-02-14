import React from 'react';
import Image from 'next/image';

import { Flex, Box, Text } from "@chakra-ui/react";

import ArrowWhiteImg from 'asset/union/arrow_white_s.png';
import SmileIcon from 'asset/union/smile_icon.png';
import ForkIcon from 'asset/union/fork_knife_s.png';

function HeaderReviewBanner() {
  return (
    <Flex bg="dPrimary" height="104px" m="18px 20px 40px" p="20px 24px" justify="center" borderRadius="12px" flexDirection="column">
      <Flex alignItems="center" h="28px">
         <Text h="28px" backgroundColor="#fff" borderRadius="38px" p="2px 14px" fontSize="s" fontWeight="bold" lineHeight="24px">필독</Text>
         <Box w="20px" h="20px" ml="10px">
          <Image src={SmileIcon} alt="스마일 이미지" />
        </Box>
        <Box w="13px" h="18px" ml="10px">
          <Image src={ForkIcon} alt="포크 이미지" />
        </Box>
      </Flex>
      <Flex alignItems="center" mt="4px">
        <Text fontSize="xl" fontWeight="800" color="#fff">첫 리뷰를 남겨보세요</Text>

        <Box ml="auto" w="16px" h="16px">
          <Image src={ArrowWhiteImg} alt="화살표 이미지" />
        </Box>
      </Flex>
    </Flex>
  )
}

export default HeaderReviewBanner;
