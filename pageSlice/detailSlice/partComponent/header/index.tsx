import React from 'react';

import Image from 'next/image';
import { useRouter } from "next/router";

import ArrowbackSvg from 'asset/svgs/arrowback-black.svg';
import KeepSvg from 'asset/svgs/keep-black.svg';
import ShareSvg from 'asset/svgs/share-black.svg';

import { Flex, Box } from "@chakra-ui/react";

function DetailHeaderComponent() {
  const router = useRouter();

  function onClickBack() {
    router.push('/')
  }

  return (
    <>
      <Flex justify="space-between" padding="24px 20px">
        <Image src={ArrowbackSvg} width={24} height={24} alt="" onClick={onClickBack} />
        <Box>
          <Image src={KeepSvg} width={24} height={24} alt="" />
          <Image src={ShareSvg} width={24} height={24} alt="" />
        </Box>
      </Flex>
    </>
  )
}
export default DetailHeaderComponent
