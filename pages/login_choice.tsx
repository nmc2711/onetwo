/**
* @title : 로그인 대기 화면
*/
import Image from 'next/image';
import dynamic from 'next/dynamic';

import { kakaoLogin } from 'apiCall/feature/login';
import { useRouter } from "next/router";
const CircleSum = dynamic(() => import("components/Background/circleSum"), { ssr: false });
import DefaultLogo from 'components/Logo/default';

import { Flex, Box, Text, Button } from '@chakra-ui/react';

import DoubleCloneSvg from 'asset/svgs/doubleclone.svg';
import KakaoSvg from 'asset/svgs/ic-24-kakao.svg';

const LoginChoice = () => {
  const { signInKakao  } = kakaoLogin();
  const router = useRouter();
  
  const handleSubmitKako = async () => {
    await signInKakao();
  };
  const innerWidth = typeof window !== "undefined" && window.innerWidth;
  return (
    <Box h="100vh">
      <DefaultLogo />
      <Flex p="26px 0 20px" flexDirection="column">
        <Box p="0 20px">
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
        </Box>
      </Flex>
      <CircleSum />

      <Flex m="20px" flexDirection="column">
        <Button p="20px" w="100%" bg="#7BC600" color="#fff" fontWeight="800" fontSize="16px" minHeight="60px" borderRadius="12px" onClick={handleSubmitKako}>
          <Image src={KakaoSvg} /> <span style={{ marginLeft: "4px" }}>카카오 로그인</span>
        </Button>
        <Button m="16px 0" w="100%" bg="transparent" color="rgba(34, 34, 34, 0.25)" fontWeight="800" fontSize="16px" minHeight="26px" borderRadius="12px" onClick={() => router.back()}>
          <span>둘러보기</span>
        </Button>
      </Flex>
      
    </Box>
  );
}
export default LoginChoice;