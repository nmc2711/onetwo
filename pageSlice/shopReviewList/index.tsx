/**
 * @title : 리뷰리스트 인덱스
 */
import React, { useState } from 'react';

import { useElementOnScreen } from 'hooks/useElementOnScreen';

import { RESULT_IN_LIST } from 'types/reviewList'; 

import SubtitleComponent from './partComponent/subTitle';
import ReviewtitleComponent from './partComponent/reviewTitle';
import DeatilComponent from './partComponent/detailBox';

import { Box } from "@chakra-ui/react";

interface ShopReviewProps {
  item: RESULT_IN_LIST;
}

const ShopReviewComponent: React.FC<ShopReviewProps> = ({ item }) => {
  const { user, review } = item;

  const [contentFixed, setContentFixed] = useState(false);

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '120px',
    threshold: 1.0,
  })
  
  const flexibleSticky = !isVisible && contentFixed;
  return (
    <>
      <Box
        borderBottom='1px solid  rgba(34, 34, 34, 0.08)'
        paddingBottom="32px"
        top="72px"
        backgroundColor="#fff"
        width="100%"
        ref={containerRef}
      >
        <SubtitleComponent review={review} />
        <ReviewtitleComponent review={review} />
      </Box>

      {flexibleSticky &&
        <Box
          borderBottom='1px solid  rgba(34, 34, 34, 0.08)'
          paddingBottom="24px"
          paddingTop="18px"
          top="70px"
          backgroundColor="rgba(255, 255, 255, 0.37)"
          backdropFilter="blur(15px)"
          position="fixed"
          zIndex="9999"
          width="100%"
        >
          <SubtitleComponent review={review} />
          <ReviewtitleComponent review={review} flexibleSticky={flexibleSticky} />
      </Box>}
      

      <DeatilComponent user={user} review={review} setContentFixed={setContentFixed} />
    </>
  )
}
export default ShopReviewComponent
