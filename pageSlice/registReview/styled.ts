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

export const ImgBox = chakra(Flex, {
  baseStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '4px',
    height: '78px',
    width: '78px',
    ml: '8px',
    backgroundColor: 'dGray.300',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    overflow: 'hidden',
  },
});

export const TasteHeader = styled.div`
  padding: 16px 20px;
  position: relative;
`;

export const TasteRowWrap = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const TasteColWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 20px;
`;

export const TasteSubTitle = chakra(Text, {
  baseStyle: {
    marginBottom: '16px',
    color: 'dGray.700',
    fontWeight: 'bold'
  },
});

export const Stiker = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 10px 8px 14px;
  font-size: 14px;
  font-weight: bold;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid rgba(34, 34, 34, 0.08);
  margin-bottom: 14px;

  &:nth-child(2n) {
    margin-left: 10px;
  }

  > span {
    margin-left: 4px;
  }
`;