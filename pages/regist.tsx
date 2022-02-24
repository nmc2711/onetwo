/**
* @title : 리뷰등록 페이지
* @path : '/regist'
*/
import { useState, useRef } from 'react';
import { Text } from '@chakra-ui/react';
// toolkit
import { useAppSelector } from 'toolkit/hooks';

import BackPage from 'components/BackPage';
import MutipleUploader from 'components/MultipleUploader/wrapper';
import RegistReviewComponent from 'pageSlice/registReview';

//style
import { ResponsiveBox } from 'styles/customStyle';
 
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
      <MutipleUploader
        ref={childRef}
        width='450px'
        height='450px'
        imagesArray={imageArray}
        handleSetImagesArray={handleSetImagesArray}
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