/**
* @title : 자주쓰는 공통 스타일 정의
*/
import { chakra, Flex, Image } from "@chakra-ui/react";

// Flex Style의 반응형 박스
const ResponsiveBox = chakra(Flex, {
  baseStyle: {
    flexDirection: {
      sm: 'column',
      lg: 'row',
    },
    justifyContent: 'center',
  },
});

const ImageW100 = chakra(Image, {
  baseStyle: {
    width: '100%',
  }
})

export {
  ResponsiveBox,
  ImageW100,
}