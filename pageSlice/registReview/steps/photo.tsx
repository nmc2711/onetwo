import React, { useState, useRef } from 'react';
import Image from 'next/image';

import { Flex, Text, Box } from "@chakra-ui/react";

import { WelcomeType, ToiletType, VibeType, KnowType } from '../enum';

import ImageCarousel, { ImageType } from 'components/Carousel';

import { TasteHeader, TasteRowWrap, TasteColWrap, TasteSubTitle, RowStiker, ColStiker } from '../styled';
import { TitleInput, ContentTextArea, ContentForm, ImgBox } from '../styled';

import SticSVG from 'asset/svgs/stic.svg';




function TasteComponent() {
  return (
    <Flex flexDirection="column" padding="58px 20px">
      <ImageCarousel />
    </Flex>
  )
}
export default TasteComponent;
