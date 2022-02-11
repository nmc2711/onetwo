import React from 'react';
import { PhotoAreaBox, InnerBox, TextBox } from './styled';
import { chakra, Flex, Text, Box } from "@chakra-ui/react";
import EllipePoly from '../../poly/ellipe'

function PhotoAreaComponent() {
  return (
    <PhotoAreaBox>
      <InnerBox>
        <EllipePoly />
      </InnerBox>
      <TextBox>
      
        <Text color="dGray.900" fontWeight="bold" fontSize="s" backgroundColor="#fff">
          요즘 유행하는 에스프레소바를 가고 싶지만 시간이 없어서 집에서 이 정도로 만족하는 걸로... 이탈리아 여행할 때 귀여운 외관에 반해 데려온 비알레띠 미니익스프레스. 추출관을 타고 졸졸 커피 나오는 모습은 봐도봐도 기분이 좋아요. 에스프레소 두 잔 이나 마셨더니 잠이 다 깨버렸네요. 홈카페를 하고싶은 분들께 추천드립니다. 너무 너무 좋아요
        </Text>
      </TextBox>
    </PhotoAreaBox>
  )
}

export default PhotoAreaComponent
