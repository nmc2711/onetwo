import React from 'react';
import Image from 'next/image';

import { Flex, Text, Box } from "@chakra-ui/react";

import { WelcomeType, ToiletType, VibeType, KnowType } from '../enum';

import { TasteHeader, TasteRowWrap, TasteColWrap, TasteSubTitle, Stiker } from '../styled';

import SticSVG from 'asset/svgs/stic.svg';

function TasteComponent() {
  return (
    <Flex flexDirection="column" padding="58px 20px">
      <TasteHeader>
        <Text fontWeight="800" fontSize="xxl" color="dGray.900" letterSpacing="-0.5px" marginBottom="28px">이 음식점의 키워드를 <br />선택해주세요</Text>
      </TasteHeader>
      
      <Box>
        <TasteSubTitle>환영</TasteSubTitle>
        <TasteRowWrap>  
          {WelcomeType.map((welcomeItem, idx: number) => {
            return (
              <Stiker key={idx + welcomeItem}>
                <Image src={SticSVG} alt="버튼 스티커"/>
                <span>{welcomeItem}</span>
              </Stiker>
            );
          })}
        </TasteRowWrap>
      </Box>


      <TasteColWrap>
        <TasteSubTitle>화장실</TasteSubTitle>
        {ToiletType.map((toiletItem, idx: number)=> {
          return (
            <div key={idx + toiletItem}>{toiletItem}</div>
          )
        })}
      </TasteColWrap>

      <TasteRowWrap>
        <TasteSubTitle>바이브</TasteSubTitle>
        {VibeType.map((vibeItem, idx: number) => {
          return (
            <div key={idx + vibeItem}>{vibeItem}</div>
          );
        })}
      </TasteRowWrap>


      <TasteRowWrap>
        <TasteSubTitle>알고 가면 좋아요</TasteSubTitle>
        {KnowType.map((knowItem, idx: number) => {
          return (
            <div key={idx + knowItem}>{knowItem}</div>
          );
        })}
      </TasteRowWrap>
    </Flex>
  )
}
export default TasteComponent;
