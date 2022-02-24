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
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
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
    top: 37px;
    left: 40px;
    color: black;
  }
`;