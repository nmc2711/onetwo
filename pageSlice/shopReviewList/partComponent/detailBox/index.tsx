import React, { useEffect } from 'react';

import { useElementOnScreen } from 'hooks/useElementOnScreen';

import { LIST_IN_REVIEW, LIST_IN_USER } from 'types/reviewList';

import UserAreaComponent from './slice/userArea';
import PhotoAreaComponent from './slice/photoArea';

import { DetailWrap } from './styled';
interface DeatilBoxCProps {
  user: LIST_IN_USER;
  review: LIST_IN_REVIEW;
  setContentFixed: any;
}

const DeatilBoxComponent: React.FC<DeatilBoxCProps> = ({ user, review, setContentFixed }) => {

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: '200px',
    threshold: 1.0,
  })

  useEffect(() => {
    setContentFixed(isVisible);
  });

  return (
    <DetailWrap ref={containerRef}>
      <UserAreaComponent user={user}/>
      <PhotoAreaComponent review={review} />
    </DetailWrap>
  )
}
export default DeatilBoxComponent
