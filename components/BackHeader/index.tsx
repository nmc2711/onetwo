import React, { ReactNode } from 'react';
import Image from 'next/image';

import { Flex, Box } from '@chakra-ui/react';

import ArrowbackSvg from 'asset/svgs/arrowback-black.svg';

interface PageProps {
  leftSideComponent?: ReactNode;
}

const BackHeaderComponent: React.FC<PageProps> = ({ leftSideComponent }) => {
  return (
    <Flex>
      <Image src={ArrowbackSvg} width={24} height={24} />
      {leftSideComponent &&
        <Box>
          {leftSideComponent}
        </Box>}
    </Flex>
  )
}

export default BackHeaderComponent;
