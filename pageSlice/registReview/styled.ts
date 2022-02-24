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

export const ContentTextArea = styled.textarea`
  width: 100%;
  min-height: 300px;
  padding: 4px 0;
  box-sizing: border-box;

  :not(:placeholder-shown) ~ span {
    display: none;
  }
`;

export const ContentForm = styled.div`
  padding: 16px 20px;
  border-bottom: 1px solid rgba(34, 34, 34, 0.03);
  position: relative;

  .placeHolder {
    position: absolute;
    top: 16px;
    left: 20px;
  }
`;