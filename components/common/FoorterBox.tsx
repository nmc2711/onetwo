import React from 'react';

import Image from 'next/image';

import KeepSvg from 'asset/svgs/keep-gray.svg';
import ShareSvg from 'asset/svgs/share-gray.svg';

import { Flex, Text } from "@chakra-ui/react";

type TProps = {
  onClickKeep: () => void;
  onClickShare: () => void;
}

const Foorter = ({ onClickKeep, onClickShare }: TProps) => {
  return (
    <>
      <Flex>
        <Flex alignItems="center" onClick={onClickKeep}>
          <Image src={KeepSvg} alt="유지하기" width={24} height={24} />
          <Text fontSize="s" fontWeight="bold" color="rgba(34, 34, 34, 0.4);">keep</Text>
        </Flex>
        <Flex marginLeft="20px" onClick={onClickShare}>
          <Image src={ShareSvg} alt="" width={24} height={24} />
          <Text fontSize="s" fontWeight="bold" color="rgba(34, 34, 34, 0.4);">Share</Text>
        </Flex>
      </Flex>
    </>
  )
}
export default Foorter
