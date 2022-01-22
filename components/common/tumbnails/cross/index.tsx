import React from 'react';

import { Box, Image } from "@chakra-ui/react";
import { CrossImg, Wrap } from '../styled';

import CrossSvg from '../../../public/images/tumbnail-cross.svg';


interface Props {
  img: string;
}

function CrossThumbnail({ img } : Props) {
  return (
    <Wrap>
      <Image src={img} alt="Beach" />
    </Wrap>
  )
}

export default CrossThumbnail;
