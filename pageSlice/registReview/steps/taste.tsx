import React from 'react';
import Image from 'next/image';

import { Flex, Text, Box } from "@chakra-ui/react";

import { WelcomeType, ToiletType, VibeType, KnowType } from '../enum';

import { TasteHeader, TasteRowWrap, TasteColWrap, TasteSubTitle, RowStiker, ColStiker } from '../styled';

import SticSVG from 'asset/svgs/stic.svg';

function TasteComponent() {
  return (
    <Flex flexDirection="column" padding="58px 20px">
      <TasteHeader>
        <Text fontWeight="800" fontSize="xxl" color="dGray.900" letterSpacing="-0.5px">이 음식점의 키워드를 <br />선택해주세요</Text>
      </TasteHeader>
      
      <Box>
        <TasteSubTitle>환영</TasteSubTitle>
        <TasteRowWrap>  
          {WelcomeType.map((welcomeItem, idx: number) => {
            return (
              <RowStiker key={idx + welcomeItem}>
                <Image src={SticSVG} alt="버튼 스티커" />
                <span>{welcomeItem}</span>
              </RowStiker>
            );
          })}
        </TasteRowWrap>
      </Box>

      <Box>
        <TasteSubTitle>화장실</TasteSubTitle>
        <TasteColWrap>
          {ToiletType.map((toiletItem, idx: number)=> {
            return (
              <ColStiker key={idx + toiletItem}>
                <Image src={SticSVG} alt="버튼 스티커" />
                <span>{toiletItem}</span>
              </ColStiker>
            )
          })}
        </TasteColWrap>
      </Box>

      <Box>
        <TasteSubTitle>바이브</TasteSubTitle>
        <TasteRowWrap>
          {VibeType.map((vibeItem, idx: number) => {
            return (
              <RowStiker key={idx + vibeItem}>
                <Image src={SticSVG} alt="버튼 스티커" />
                <span>{vibeItem}</span>
              </RowStiker>
            );
          })}
        </TasteRowWrap>
      </Box>


      <Box>
        <TasteSubTitle>알고 가면 좋아요</TasteSubTitle>
        <TasteRowWrap>
          {KnowType.map((knowItem, idx: number) => {
            return (
              <RowStiker key={idx + knowItem}>
                <Image src={SticSVG} alt="버튼 스티커" />
                <span>{knowItem}</span>
              </RowStiker>
            );
          })}
        </TasteRowWrap>
      </Box>
    </Flex>
  )
}
export default TasteComponent;
