import React from 'react';

import { Box, Flex } from "@chakra-ui/react";

function FirstReviewBanner() {
  return (
    <Flex bg="#7CC800" height="96px" m="0 20px 42px" p="19px 20px" borderRadius="12px" justify="center" align="center" >
      <h4 style={{ color: '#fff', fontWeight: 800, fontSize: '21px' }}>첫 리뷰를 남겨보세요</h4>
    </Flex>
  )
}

export default FirstReviewBanner;
