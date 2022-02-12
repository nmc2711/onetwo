import React from 'react';

import { Text, Image } from "@chakra-ui/react";

import { UserAreaBox } from './styled';

import { USERTYPE } from '../../type';

function UserAreaComponent({ user }: any) {
  return (
    <UserAreaBox>
      <Image src={user.profile ?? "http://t1.daumcdn.net/movie/c5bce33702b9453d6ed499fafc0a7d1062471be3"} alt="초이스 셀렉트 로고이미지" width="32px" height="32px" borderRadius="50%" />
      <Text ml="12px" fontWeight="bold" fontSize="s">{user.nickname ?? '익명의 리뷰어'}</Text>
    </UserAreaBox>
  )
}

export default UserAreaComponent
