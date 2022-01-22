import React from 'react';

import { Image } from "@chakra-ui/react";

import { ArchImg } from '../styled';

interface Props {
  thumbnail: string;
}

function ArchThumbnail({ thumbnail } : Props) {
  return (
    <ArchImg img={thumbnail} />
  )
}

export default ArchThumbnail;