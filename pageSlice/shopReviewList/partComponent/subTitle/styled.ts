import styled from 'styled-components';

import { chakra, Flex, Text, Box } from "@chakra-ui/react";

export const SubTitleBox = styled(Flex)`
  align-items: center;
  margin: 0 36px;
  
  &:before {
    content: '';
    width: 6px;
    height: 6px;
    margin-right: 8px;
    background: rgba(34, 34, 34, 0.4);
    border-radius: 50%;
  }
`;

export const SubText = chakra(Text, {
  baseStyle: {
    color: 'dGray.600',
    fontWeight: '700',
    fontSize: 's',
  },
});