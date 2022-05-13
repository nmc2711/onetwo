import React from 'react';

import { Flex } from "@chakra-ui/react";

import ImageCarousel from 'components/Carousel';

function TasteComponent() {
  return (
    <Flex flexDirection="column">
      <ImageCarousel />
    </Flex>
  )
}
export default TasteComponent;
