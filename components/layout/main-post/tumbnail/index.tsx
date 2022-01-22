
import Link from 'next/link';
import React from 'react';

import { Box } from "@chakra-ui/react";

import CrossThumbnail from './cross';
import ArchThumbnail from './arch';

import { Wrap } from './styled';

interface Props {
  post: any;
}

function Thumbnail({ post }: Props) {
  return (
    <Wrap>
      <Link href={`/products/${post.id}`}>
        <a>
          {post.pictureUrl && (
            //case에 따라 바꿔주기
            <ArchThumbnail thumbnail={post.pictureUrl}/>
          )}
        </a>
      </Link>
    </Wrap>
  )
}

export default Thumbnail
;