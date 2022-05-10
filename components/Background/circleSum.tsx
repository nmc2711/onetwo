import { useRef } from 'react';

import { Box, Flex } from '@chakra-ui/react';
import getWindowSize from 'hooks/useGetWindowSize';


const CircleSum = () => {
  const { width }: any = getWindowSize();

  return (
    <Flex h="max-content" position="relative" minHeight="42vh" overflow="hidden" >
      <Box pos="absolute" left="22.5%" top="12%" w={`${+width * 0.2}px`} h={`${+width * 0.2}px`} borderRadius="50%" bg="blue" className="slide-right">
        <div></div>
      </Box>
      <Box pos="absolute" right="7.2%" top="16%" w={`${+width * 0.245}px`} h={`${+width * 0.245}px`} borderRadius="50%" bg="red" className="slide-left">
        <div></div>
      </Box>
      <Box position="absolute" left="2%" top="36%" w={`${+width * 0.25}px`} h={`${+width * 0.25}px`} borderRadius="50%" bg="green" className="slide-right">
        <div></div>
      </Box>
      <Box position="absolute" left="38%" top="32%" w={`${+width * 0.31}px`} h={`${+width * 0.31}px`} borderRadius="50%" bg="purple" className="slide-left">
        <div></div>
      </Box>
      <Box position="absolute" right="-15%" top="38%" w={`${+width * 0.2}px`} h={`${+width * 0.2}px`} borderRadius="50%" bg="yellow" className="slide-right">
        <div></div>
      </Box>
      <Box position="absolute" left="-15%" top="60%" w={`${+width * 0.2}px`} h={`${+width * 0.2}px`} borderRadius="50%" bg="gray" className="slide-left">
        <div></div>
      </Box>
      <Box position="absolute" left="22%" top="70%" w={`${+width * 0.2}px`} h={`${+width * 0.2}px`} borderRadius="50%" bg="pink" className="slide-bottom">
        <div></div>
      </Box>
      <Box position="absolute" right="4%" top="54%" w={`${+width * 0.28}px`} h={`${+width * 0.28}px`} borderRadius="50%" bg="skyblue" className="slide-right">
        <div></div>
      </Box>
    </Flex>
  );
}
export default CircleSum;