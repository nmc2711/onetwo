/**
* @title : sticky common header(nav)
*/
import { useUser } from 'apiCall/feature/user';
import Link from "next/link";
import { Flex, Box } from "@chakra-ui/react";

import Image from 'next/image';

import LogoImg from 'asset/logo/Logos.png';

import { NavText, StickyHeader } from './styled';
import { kakaoLogin } from 'hooks/login';

import { useColorMode } from "@chakra-ui/color-mode";

const HeaderComponent = () => {
  const { setColorMode, colorMode } = useColorMode();

  const user: any = useUser();

  const { signInKakao  } = kakaoLogin();

  const handleSubmitKako = async () => {
    await signInKakao();
  };
  const toggleMode = () => {
    if (colorMode === 'dark') {
      setColorMode('light');
    } else {
      setColorMode('dark');
    }
  }
  return (
    <>
      <StickyHeader>
        <Box width="70px" height="32px">
          <Link href="/">
            <Image src={LogoImg} alt="초이스 셀렉트 로고이미지" />
          </Link>
        </Box>

        <Flex ml="auto" flexDirection="row">
          <NavText onClick={toggleMode}>{colorMode === 'dark' ? 'Dark' : 'Light'}</NavText>
          <NavText>Filter</NavText>
          {user ? 
            <Link href="/mypage">
              <NavText mr={0}>MyPage</NavText>
            </Link>
            :
            <NavText mr={0} onClick={handleSubmitKako}>Login</NavText>
          }
        </Flex>
      </StickyHeader>
    </>
  );
};
export default HeaderComponent;
