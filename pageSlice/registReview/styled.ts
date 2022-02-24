import styled from 'styled-components';
import { chakra, Flex, Text, Input } from "@chakra-ui/react";

export const TitleInput = styled.input`
  width: 100%;
  height: 36px;
  font-size: 24px;
  color: #222;
  font-weight: 800;
  letter-spacing: -0.5px;
  &::placeholder {
    font-size: 24px;
    color: #222;
    font-weight: 800;
    letter-spacing: -0.5px;
  }
`;