import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from "next/link";

import { Flex, Box } from '@chakra-ui/react';
import { useRouter } from "next/router";
import ArrowbackSvg from 'asset/svgs/arrowback-black.svg';

interface PageProps {
  leftSideComponent?: ReactNode;
}

const BackHeaderComponent: React.FC<PageProps> = ({ leftSideComponent }) => {
  const router = useRouter();
  return (
    <Flex p="17px 20px" alignItems="center">
      <Image src={ArrowbackSvg} width={24} height={24} onClick={() => router.back()} alt="백페이지 이미지"/>
      {leftSideComponent &&
        <Box ml="auto">
          {leftSideComponent}
        </Box>}
    </Flex>
  )
}
export default BackHeaderComponent;
