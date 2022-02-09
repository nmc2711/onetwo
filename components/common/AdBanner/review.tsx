import React from 'react';

import { Flex } from "@chakra-ui/react";

function FirstReviewBanner() {
  return (
    <Flex bg="#7CC800" height="96px" m="18px 20px 40px" p="19px 20px" borderRadius="12px" justify="center" align="center" >
      <h4 style={{ color: '#fff', fontWeight: 800, fontSize: '21px' }}>첫 리뷰를 남겨보세요</h4>
    </Flex>
  )
}

export default FirstReviewBanner;
