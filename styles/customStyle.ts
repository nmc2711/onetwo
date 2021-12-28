import { chakra, Flex } from "@chakra-ui/react";

const ResponsiveBox = chakra(Flex, {
  baseStyle: {
    flexDirection: {
      sm: 'column',
      lg: 'row',
    },
  },
});

export {
  ResponsiveBox,
}