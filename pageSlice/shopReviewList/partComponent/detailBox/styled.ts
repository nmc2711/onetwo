import styled from 'styled-components';

import { chakra, Flex, Text } from "@chakra-ui/react";

export const DetailWrap = styled(Flex)`
  flex-direction: column;
`;

export const SubText = chakra(Text, {
  baseStyle: {
    color: 'dGray.600',
    fontWeight: '700',
    fontSize: 's',
  },
});

export const UserAreaBox = styled(Flex)`
  align-items: center;
  margin: 20px 20px 0 20px;
`;

export const PhotoAreaBox = styled(Flex)`
  align-items: center;
  flex-direction: column;
  margin: 24px 20px 0 20px;
  justify-content: center;
`;

export const InnerBox = styled(Flex)`
  transform: scaleY(-1);

  mask: linear-gradient(rgba(255, 255, 255, 0) 0.1%, #FFFFFF 50%);
`;

export const TextBox = styled(Flex)`
  align-self: flex-start;
  min-height: 60px;
  margin: 24px 0 28px 0;
  position: relative;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  background: #FFF;
   overflow: hidden;
    &:after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      height: 55%;
      bottom: 0;
      background: linear-gradient(transparent, #FFF) left repeat;
      background: -webkit-linear-gradient(rgba(255, 255, 255, 0), #FFF) left repeat;
    }
`;