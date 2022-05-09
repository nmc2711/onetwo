/**
* @title : 로그인 대기 화면
*/
import Image from 'next/image';
import dynamic from 'next/dynamic';

const CircleSum = dynamic(() => import("components/Background/circleSum"), { ssr: false });
import DefaultLogo from 'components/Logo/default';

import { Flex, Box, Text } from '@chakra-ui/react';

import DoubleCloneSvg from 'asset/svgs/doubleclone.svg';

const LoginChoice = () => {
  const innerWidth = typeof window !== "undefined" && window.innerWidth;
  return (
    <Box h="100vh">
      <DefaultLogo />
      <Flex p="26px 20px 20px 20px" flexDirection="column">
        <Box mb="16px">
          <Text 
            h="28px" 
            fontSize="xxxl" 
            fontWeight="800" 
            maxWidth="80%" 
            lineHeight="40px" 
            letterSpacing="-0.5px"
          >
            맛집을 공유하고
          </Text>
        </Box>
        <Box mb="16px">
          <Text 
            h="28px" 
            fontSize="xxxl" 
            fontWeight="800" 
            maxWidth={+innerWidth > 359 ? "80%" : "100%"} 
            lineHeight="40px" 
            letterSpacing="-0.5px"
          >
            취향이 맞는 사람과 함께 
          </Text>
        </Box>
        <Box display="flex">
          <Text 
            h="28px" 
            fontSize="xxxl" 
            fontWeight="800" 
            maxWidth="80%" 
            lineHeight="40px" 
            letterSpacing="-0.5px"
            mr="6px"
          >
            시간을 보내세요
          </Text>
          <Image src={DoubleCloneSvg} />
        </Box>

        <CircleSum />
      </Flex>
    </Box>
  );
}
export default LoginChoice;