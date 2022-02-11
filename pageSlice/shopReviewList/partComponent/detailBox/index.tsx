import React from 'react';

import { DetailWrap } from './styled';

import UserAreaComponent from './userArea';
import PhotoAreaComponent from './photoArea';

function DeatilBoxComponent() {
  return (
    <DetailWrap>
      <UserAreaComponent />
      <PhotoAreaComponent />
    </DetailWrap>
  )
}

export default DeatilBoxComponent
