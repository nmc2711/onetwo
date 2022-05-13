import React, { useState, useRef } from 'react';

import { Titem } from 'types/uploader';

import { Text, Box } from "@chakra-ui/react";
import { TitleInput, ContentTextArea, ContentForm, ImgBox } from '../styled';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

// toolkit
import { useAppSelector } from 'toolkit/hooks';

function FormStepComponent() {
  const [imageArray, setImageArray] = useState<Titem[]>([]);

  const childRef = useRef();

  const handleSetImagesArray = (images: Titem[]) => {
    setImageArray(images);
  }

  return (
    <Box paddingTop="58px">
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

      {/* <Flex m="24px 0" display="flex" flexWrap="wrap" height="78px" flexDirection="column" overflowY="scroll" alignContent="flex-start">
        <MutipleUploader
          ref={childRef}
          imagesArray={imageArray}
          handleSetImagesArray={handleSetImagesArray}
          multipleFiles={true}
          apiEndpoint={`${baseApiUrl}/uploads/images`}
          addIcon={<ImgBox>사진 <br />등록</ImgBox>}
        />
        {imageArray.length > 0 && 
          imageArray.map((item: Titem) => {
            return (
              <ImgBox key={item.name}>
                <img src={item.preview} style={{ width: '100%', height: '100%' }} />
              </ImgBox>
            )
          })
        }
      </Flex> */}

      <Map
      center={{ lat: 33.5563, lng: 126.79581 }}
      style={{ width: "100%", height: "360px" }}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{color:"#000"}}>을왕리 횟집</div>
      </MapMarker>
    </Map>
    </Box>
  )
}
export default FormStepComponent;
