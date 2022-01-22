import React from 'react';

import { Box, Image } from "@chakra-ui/react";

import { ArchImg } from '../styled';

//@TODO: 절대 경로 만들기

interface Props {
  img: string;
}

function ArchThumbnail({ img } : Props) {
  return (
    <>
      <Image src={img} alt="img" />
    </>
  )
}

export default ArchThumbnail;