import React from 'react';

import { LIST_IN_REVIEW } from 'types/reviewList';

import { chakra, Flex, Text, Box } from "@chakra-ui/react";
import EllipePoly from '../../../poly/ellipe'

import { PhotoAreaBox, InnerBox, TextBox } from '../styled';

interface PhotoAreaProps {
  review: LIST_IN_REVIEW;
}

const PhotoAreaComponent: React.FC<PhotoAreaProps> = ({ review }) => {
  const reviewBG = review.images[0];
  return (
    <PhotoAreaBox>
      <InnerBox>
        <EllipePoly imageUrl={reviewBG} />
      </InnerBox>
      <TextBox>
      
        <Text color="dGray.900" fontWeight="bold" fontSize="s" backgroundColor="#fff">
          {review.content}
        </Text>
      </TextBox>
    </PhotoAreaBox>
  )
}

export default PhotoAreaComponent
