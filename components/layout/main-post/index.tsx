import { Box } from '@chakra-ui/react';
import React from 'react';

import Title from '../../common/post/post-title';
import Tumbnail from './tumbnail';

/** 
 * @description 메인 포스트 컴포넌트입니다
 */

interface Props {
  post: any;
}

function MainPage({ post }: Props) {
  return (
    <Box h="893px">
      <Title title={post.title} />
      {/* <Reviewer /> */}
      <Tumbnail post={post} />
      {/* <Map /> */}
      {/* <ShareBtn /> */}
    </Box>
  )
}

export default MainPage;
