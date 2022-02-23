/**
* @title : 리뷰등록 페이지
* @path : '/regist'
*/
import { useState, useRef } from 'react';
import { getProducts } from "apiCall/feature/products";
import { GetServerSideProps } from 'next';

// toolkit
import { useAppSelector } from 'toolkit/hooks';
//style
import { ResponsiveBox } from 'styles/customStyle';

import BackPage from 'components/BackPage';
import ImageUploader from 'components/ImageUpload';

const LeftSideComponents = () => {
  return (
    <div>왼쪽 컨텐츠</div>
  )
}
 
const RegistPage: React.FC = () => {

  return (
    <BackPage title="리뷰등록 페이지입니다." leftSideComponent={<LeftSideComponents />}>
      <ImageUploader />
    </BackPage>
  );
};
export default RegistPage;