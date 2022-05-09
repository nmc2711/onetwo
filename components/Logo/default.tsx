import React, { ReactNode } from 'react';
import { useRouter } from "next/router";
import Image from 'next/image';

import { Flex, Box } from '@chakra-ui/react';

import DefaultLogoSvg from 'asset/svgs/defaultLogo.svg';

const DefaultLogo = () => {
  const router = useRouter();
  return (
    <Flex p="20px">
      <Image src={DefaultLogoSvg} onClick={() => router.back()} alt="기본로고이미지" />
    </Flex>
  );
}
export default DefaultLogo;