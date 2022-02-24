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
import UU from 'components/MultipleUploader/wrapper'


// 

import RegistReviewComponent from 'pageSlice/registReview';
 
const RegistPage: React.FC = () => {

  const [imageArray, setImageArray] = useState([]);

  const childRef = useRef<any>();

  const handleSetImagesArray = (images: any) => {
    setImageArray(images);
  }

  const LeftSideComponents = () => {
    return (
      <Text fontWeight="bold" fontSize="m" color="dGray.500">다음</Text>
    )
  }

  return (
    <BackPage title="리뷰등록 페이지입니다." leftSideComponent={<LeftSideComponents />}>
      <RegistReviewComponent />
      {/* <ImageUploader /> */}
      <UU
        ref={childRef}
        width='450px'
        height='450px'
        imagesArray={imageArray}
        handleSetImagesArray={handleSetImagesArray}
        isDragNotAcceptColor='rgba(0, 0, 0, 0.3)'
        isDragAcceptColor='#18840f'
        isDragRejectColor='#ff0000'
        multipleFiles={true}
        apiEndpoint='http://localhost:5000/admin/products/publish/media'
      />
      {imageArray.length > 0 && (
        <button
          onClick={() => {
            childRef.current.handleStartUploadingFiles();
          }}
        >
          Upload
        </button>
      )}
    </BackPage>
  );
};
export default RegistPage;