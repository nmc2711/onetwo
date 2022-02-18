import React from 'react';

import { LIST_IN_REVIEW } from 'types/reviewList';

import Image from 'next/image';
import { Flex, Box } from "@chakra-ui/react";

import { ReviewTitleBox, ReviewText } from './styled';

import ArrowImg from 'asset/union/dark-arrow-m.png';

interface ReviewTitleProps {
  review: LIST_IN_REVIEW;
  flexibleSticky?: boolean;
}

const ReviewtitleComponent: React.FC<ReviewTitleProps> = ({ review, flexibleSticky }) => {
  return (
    <ReviewTitleBox>
      <ReviewText>{review.title}
      {!flexibleSticky && 
        <Flex alignItem="center" display="inline-flex" float="right">
          <Box width="32px" height="32px">
            <Image src={ArrowImg} alt="초이스 셀렉트 로고이미지"/>
          </Box>
        </Flex>}

      </ReviewText>
    </ReviewTitleBox>
  )
}
export default ReviewtitleComponent
