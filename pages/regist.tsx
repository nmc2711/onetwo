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
 
const RegistPage: React.FC = () => {

  return (
    <>리뷰 등록페이지</>
  );
};
export default RegistPage;