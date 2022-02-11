import styled from 'styled-components';

import { chakra, Flex, Text, Box } from "@chakra-ui/react";

export const ReviewTitleBox = styled(Flex)`
  align-items: center;
  margin: 4px 20px 0 20px;
  white-space: pre-wrap;
  
`;

export const ReviewText = chakra(Text, {
  baseStyle: {
    color: 'dGray.900',
    fontWeight: '800',
    fontSize: 'xxxl',
    letterSpacing: '-0.5px',
  },
});

