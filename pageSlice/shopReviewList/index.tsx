/**
 * @title : 리뷰리스트 인덱스
 */
import React from 'react';

import { RESULT_IN_LIST } from 'types/reviewList'; 

import SubtitleComponent from './partComponent/subTitle';
import ReviewtitleComponent from './partComponent/reviewTitle';
import DeatilComponent from './partComponent/detailBox';

interface ShopReviewProps {
  item: RESULT_IN_LIST;
}

const ShopReviewComponent: React.FC<ShopReviewProps> = ({ item }) => {
  const { user, review } = item;

  return (
    <>
      <SubtitleComponent />
      <ReviewtitleComponent />
      <DeatilComponent user={user} review={review} />
    </>
  )
}
export default ShopReviewComponent
