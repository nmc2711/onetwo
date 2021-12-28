import { chakra, Flex, Image } from "@chakra-ui/react";

// Flex Style의 반응형 박스
const ResponsiveBox = chakra(Flex, {
  baseStyle: {
    flexDirection: {
      sm: 'column',
      lg: 'row',
    },
    justifyContent: 'center',
    padding: '0 1em',
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