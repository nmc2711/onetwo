import React from 'react';

import { DetailWrap } from './styled';

import UserAreaComponent from './userArea';
import PhotoAreaComponent from './photoArea';

import { USERTYPE } from '../../type';

function DeatilBoxComponent({ user, review } : any) {
  return (
    <DetailWrap>
      <UserAreaComponent user={user}/>
      <PhotoAreaComponent review={review} />
    </DetailWrap>
  )
}

export default DeatilBoxComponent
