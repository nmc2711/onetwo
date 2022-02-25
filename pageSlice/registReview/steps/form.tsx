import React, { useState, useRef } from 'react';
import { chakra, Flex, Text, Input, Box } from "@chakra-ui/react";

import MutipleUploader from 'components/MultipleUploader/wrapper';

import { TitleInput, ContentTextArea, ContentForm, ImgBox } from '../styled';

// toolkit
import { useAppSelector } from 'toolkit/hooks';

function FormStepComponent() {
  const [imageArray, setImageArray] = useState([]);
  const childRef = useRef<any>();

  const handleSetImagesArray = (images: any) => {
    setImageArray(images);
  }

  return (
    <>
      <Box p="16px 20px" borderBottom="1px solid rgba(34, 34, 34, 0.03)">
        <TitleInput placeholder="제목을 입력해 주세요." />
      </Box>

      <ContentForm >
        <label htmlFor="identifier">
          <ContentTextArea
            id='identifier'
            placeholder="&nbsp;"
            className="form-control form-input icon-placeholder"
          />
          <span className="placeHolder">
            <Text color="dGray.900" fontWeight="bold" fontSize="m">리뷰를 30자 이상 적어주세요.</Text>
            <Text color="dGray.400" fontWeight="bold" fontSize="m">분위기, 가격, 예약유무를 적어주면 좋아요!</Text>
          </span>
        </label>
      </ContentForm>

      <Flex m="24px 0" display="flex" flexWrap="wrap" height="78px" flexDirection="column" overflowY="scroll">
        <MutipleUploader
          ref={childRef}
          imagesArray={imageArray}
          handleSetImagesArray={handleSetImagesArray}
          multipleFiles={true}
          apiEndpoint='http://localhost:5000/admin/products/publish/media'
          addIcon={<ImgBox>사진 <br />등록</ImgBox>}
        />
        {imageArray.length > 0 && 
          imageArray.map((item: any) => {
            return (
              <ImgBox 
                borderRadius="4px"
                w="78px" 
                h="78px" 
                ml="8px" 
                backgroundColor="dGray.300"
                color="#fff"
                fontWeight="bold"
                textAlign="center"
                key={item.name}
                >
                  <img src={item.preview} style={{ width: '100%', height: '100%' }}/>
              </ImgBox>
            )
          })
        }
      </Flex>
    </>
  )
}
export default FormStepComponent;
