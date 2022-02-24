import React from 'react';
import { chakra, Flex, Text, Input, Box } from "@chakra-ui/react";
import { TitleInput } from '../styled';

function FormStepComponent() {
  return (
    <>
      <Box p="16px 20px" borderBottom="1px solid rgba(34, 34, 34, 0.03)">
        <TitleInput placeholder="제목을 입력해 주세요." />
      </Box>
    </>
  )
}
export default FormStepComponent;
