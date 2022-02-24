import React from 'react';
import { chakra, Flex, Text, Input, Box } from "@chakra-ui/react";
import { TitleInput, ContentTextArea, ContentForm } from '../styled';

function FormStepComponent() {
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
            <p style={{ color: 'red' }}>1줄</p>
            <p>2줄</p>
          </span>
        </label>
        {/* <ContentTextArea placeholder="줄바꿈은 다음과 같은 캐릭터셋을 지정합니다.&#13;&#10;줄바꿈이 되었습니다." /> */}
      </ContentForm>
    </>
  )
}
export default FormStepComponent;
