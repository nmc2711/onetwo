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

import ImageUploader from 'components/ImageUpload';
 
const RegistPage: React.FC = () => {

  return (
    <><ImageUploader /></>
  );
};
export default RegistPage;