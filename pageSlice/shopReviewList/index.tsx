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
  console.log(item)
  const { user, review } = item;

  return (
    <>
      <SubtitleComponent review={review} />
      <ReviewtitleComponent review={review} />
      <DeatilComponent user={user} review={review} />
    </>
  )
}
export default ShopReviewComponent
