import React from 'react';

import { SubTitleBox, SubText } from './styled';

import { LIST_IN_REVIEW } from 'types/reviewList';
interface SubtitleProps {
  review: LIST_IN_REVIEW;
}

const SubtitleComponent: React.FC<SubtitleProps> = ({ review }) => {
  return (
    <SubTitleBox>
      <SubText>{review.tags[0]}</SubText>
    </SubTitleBox>
  )
}

export default SubtitleComponent
