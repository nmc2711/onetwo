import React from 'react';

import { Text, Image } from "@chakra-ui/react";

import { UserAreaBox } from './styled';

function UserAreaComponent() {
  return (
    <UserAreaBox>
      <Image src={"http://t1.daumcdn.net/movie/c5bce33702b9453d6ed499fafc0a7d1062471be3"} alt="초이스 셀렉트 로고이미지" width="32px" height="32px" borderRadius="50%" />
      <Text ml="12px" fontWeight="bold" fontSize="s">스타벅스 고슴도치</Text>
    </UserAreaBox>
  )
}

export default UserAreaComponent
