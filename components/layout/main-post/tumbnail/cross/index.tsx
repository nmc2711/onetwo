import React from 'react';

import { Box, Image } from "@chakra-ui/react";
import { CrossImg, Wrap } from '../styled';

import CrossSvg from '../../../public/images/tumbnail-cross.svg';


interface Props {
  thumbnail: string;
}

function CrossThumbnail({ thumbnail } : Props) {
  return (
    <Wrap>
      <Image src={thumbnail} alt="thumbnail" />
    </Wrap>
  )
}

export default CrossThumbnail;
