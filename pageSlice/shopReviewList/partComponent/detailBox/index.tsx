import React from 'react';

import { LIST_IN_REVIEW, LIST_IN_USER } from 'types/reviewList';

import UserAreaComponent from './slice/userArea';
import PhotoAreaComponent from './slice/photoArea';

import { DetailWrap } from './styled';
interface DeatilBoxCProps {
  user: LIST_IN_USER;
  review : LIST_IN_REVIEW
}

const DeatilBoxComponent: React.FC<DeatilBoxCProps> = ({ user, review }) => {
  return (
    <DetailWrap>
      <UserAreaComponent user={user}/>
      <PhotoAreaComponent review={review} />
    </DetailWrap>
  )
}
export default DeatilBoxComponent
