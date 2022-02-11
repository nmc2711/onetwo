import React from 'react';
import { subTitleCaptions } from '../../enum';

import { ReviewTitleBox, ReviewText } from './styled';
import { chakra, Flex, Text, Box } from "@chakra-ui/react";
import Image from 'next/image';

import ArrowImg from 'asset/union/dark-arrow-m.png';

function ReviewtitleComponent() {
  return (
    <ReviewTitleBox>
      <ReviewText>에스프레소바를 가고싶지만 가고싶지만 시간이 없어

      <Flex alignItem="center" display="inline-flex" float="right">
        <Box width="32px" height="32px">
          <Image src={ArrowImg} alt="초이스 셀렉트 로고이미지"/>
        </Box>
      </Flex>

      </ReviewText>
    </ReviewTitleBox>
  )
}
export default ReviewtitleComponent
