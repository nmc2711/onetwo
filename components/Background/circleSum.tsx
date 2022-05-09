import { useRef } from 'react';

import { Box, Flex } from '@chakra-ui/react';
import getWindowSize from 'hooks/useGetWindowSize';


const CircleSum = () => {
  const { width }: any = getWindowSize();

  return (
    <Flex p="20px" h="max-content" position="relative" minHeight="40vh" overflow="hidden" >
      <Box pos="absolute" top="10%" w={`${+width * 0.2}px`} h={`${+width * 0.2}px`} borderRadius="50%" bg="blue" className="slide-right">
        <div></div>
      </Box>
      <Box pos="absolute" right="20%" w={`${+width * 0.3}px`} h={`${+width * 0.3}px`} borderRadius="50%" bg="red" className="slide-right">
        <div></div>
      </Box>
      <Box position="absolute" right="50%" top="30%" w={`${+width * 0.2}px`} h={`${+width * 0.2}px`} borderRadius="50%" bg="green" className="slide-top">
        <div></div>
      </Box>
    </Flex>
  );
}
export default CircleSum;