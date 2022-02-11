import { chakra, Flex, Text } from "@chakra-ui/react";

export const NavText = chakra(Text, {
  baseStyle: {
    color: 'dGray.900',
    fontWeight: '700',
    fontSize: 'm',
    marginRight: '20px'
  },
});

export const StickyHeader = chakra(Flex, {
  baseStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    p: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.37)',
    backdropFilter: 'blur(15px)',
    position: 'sticky',
    top: '0px',
    zIndex: '9999',
  },
});
