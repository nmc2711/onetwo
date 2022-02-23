/**
* @title : 리뷰등록 페이지
* @path : '/regist'
*/
import { useState, useRef } from 'react';
import { getProducts } from "apiCall/feature/products";
import { GetServerSideProps } from 'next';

import { Flex, Box, Text } from '@chakra-ui/react';

// toolkit
import { useAppSelector } from 'toolkit/hooks';
//style
import { ResponsiveBox } from 'styles/customStyle';

import BackPage from 'components/BackPage';
import ImageUploader from 'components/ImageUpload';
 
const RegistPage: React.FC = () => {

  const LeftSideComponents = () => {
    return (
      <Text fontWeight="bold" fontSize="m" color="dGray.500">다음</Text>
    )
  }

  return (
    <BackPage title="리뷰등록 페이지입니다." leftSideComponent={<LeftSideComponents />}>
      <ImageUploader />
    </BackPage>
  );
};
export default RegistPage;