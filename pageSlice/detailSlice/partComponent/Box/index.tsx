
import React from 'react';

import Address from 'components/common/AddressBox';
import Foorter from 'components/common/FoorterBox';

import Title from './title';
import Photo from './photo';
import SubTitle from './subTitle';
import TextBox from './textBox';

import { Flex, Box, Text } from "@chakra-ui/react";

import { getDetail } from 'apiCall/feature/detail';

function DetailBoxComponent() {
  const addressItem: any = {
    addressName: '런던 베이글 뮤지엄',
    address: '서울특별시 종로구 북촌로4길 20',
  }

  getDetail();
  return (
    <>
      <Title />
      <Box padding="20px" borderTop="1px solid rgba(34, 34, 34, 0.08)">
        <SubTitle />
        <Photo />
        <TextBox />
        <Address item={addressItem} cb={() => console.log("경로설정 함수 ::::")} />
        <Foorter onClickKeep={() => console.log("유지하기 클릭 함수 ::::")} onClickShare={() => console.log("공유하기 클릭 함수 :::")} />
      </Box>
    </>
  )
}
export default DetailBoxComponent
