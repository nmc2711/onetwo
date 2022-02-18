import React from 'react';

import Addres from 'components/common/address';
import Foorter from 'components/common/foorter';

import Title from './title';
import Photo from './photo';
import SubTitle from './subTitle';
import TextBox from './textBox';

function DetailBoxComponent() {
  const addressItem = {
    addressName: '런던 베이글 뮤지엄',
    address: '서울특별시 종로구 북촌로4길 20',
  }

  return (
    <>
      <Title />
      <div className="p-5 border-t">
        <SubTitle />
        <Photo />
        <TextBox />
        <Addres item={addressItem} cb={() => console.log("경로설정 함수 ::::")} />
        <Foorter onClickKeep={() => console.log("유지하기 클릭 함수 ::::")} onClickShare={() => console.log("공유하기 클릭 함수 :::")} />
      </div>
    </>
  )
}
export default DetailBoxComponent
