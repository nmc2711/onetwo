import React from 'react';
import { Flex, Box, Text } from "@chakra-ui/react";

function DetailTextComponent() {
  const list = ['노키즈존이에요', '노래가 특별해요.', '음식이 맛있어요', '다시 가고 싶어요']
  return (
    <>
      <Flex w="290px" flexWrap="wrap" marginBottom="24px">
        {list.map((i, k) => {
          return <Text key={k} margin="0 8px 8px 0" padding="4px 16px" borderRadius="16px" bg="rgba(34, 34, 34, 0.03)" fontSize="s" fontWeight="bold" border="1px solid rgba(34, 34, 34, 0.02">{i}</Text>
        })}
      </Flex>
      <Box marginBottom="32px">
        <Text fontSize="s" fontWeight="bold">
          요즘 유행하는 에스프레소바를 가고 싶지만 시간이 없어서 집에서 이 정도로 만족하는 걸로... 이탈리아 여행할 때 귀여운 외관에 반해 데려온 비알레띠 미니익스프레스.
          추출관을 타고 졸졸 커피 나오는 모습은 봐도봐도 기분이 좋아요. 에스프레소 두 잔 이나 마셨더니 잠이 다 깨버렸네요.
          홈카페를 하고싶은 분들께 추천드립니다. 너무 너무 좋아요
          요즘 유행하는 에스프레소바를 가고 싶지만 시간이 없어서 집에서 이 정도로 만족하는 걸로... 이탈리아 여행할 때 귀여운 외관에 반해 데려온 비알레띠 미니익스프레스.
        </Text>
      </Box>
    </>
  )
}
export default DetailTextComponent
