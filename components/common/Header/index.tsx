/**
* @title : sticky common header(nav)
*/
import { useUser } from 'apiCall/feature/user';

import Link from "next/link";
import { Flex, Box } from "@chakra-ui/react";

import Image from 'next/image';

import LogoImg from 'asset/logo/Logos.png';

import { NavText } from './styled';

const HeaderComponent = () => {
  const user: any = useUser();

  return (
    <>
      <Flex justifyContent="center" alignItems="center" p="20px">

        <Box width="70px" height="32px">
          <Link href="/">
            <Image src={LogoImg} alt="초이스 셀렉트 로고이미지" />
          </Link>
        </Box>

        <Flex ml="auto" flexDirection="row">
          <NavText>Filter</NavText>
          {user ? 
            <Link href="/mypage">
              <NavText mr={0}>MyPage</NavText>
            </Link>
            :
            <Link href="/sign-in">
              <NavText mr={0}>Login</NavText>
            </Link>
          }
        </Flex>
      </Flex>
    </>
  );
};
export default HeaderComponent;
