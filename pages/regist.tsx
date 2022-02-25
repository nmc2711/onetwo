/**
* @title : 리뷰등록 페이지
* @path : '/regist'
*/
import { Text } from '@chakra-ui/react';
// toolkit
import { useAppSelector } from 'toolkit/hooks';

import BackPage from 'components/BackPage';
import RegistReviewComponent from 'pageSlice/registReview';
 
const RegistPage: React.FC = () => {

  const LeftSideComponents = () => {
    return (
      <Text fontWeight="bold" fontSize="m" color="dGray.500">다음</Text>
    );
  }

  return (
    <BackPage title="리뷰등록 페이지입니다." leftSideComponent={<LeftSideComponents />}>
      <RegistReviewComponent />
    </BackPage>
  );
};
export default RegistPage;