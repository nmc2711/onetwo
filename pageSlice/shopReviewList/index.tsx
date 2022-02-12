import React from 'react';
import SubtitleComponent from './partComponent/subTitle';
import ReviewtitleComponent from './partComponent/reviewTitle';
import DeatilComponent from './partComponent/detailBox';
import { USERTYPE } from './type';

function ShopReviewComponent({ item }: any) {
  console.log(item)
  const { user, review } = item;
  return (
    <div>
      <SubtitleComponent />
      <ReviewtitleComponent />
      <DeatilComponent user={user} review={review} />
    </div>
  )
}
export default ShopReviewComponent
