/**
 * @title : 백버튼이 있는 페이지 공통 컴포넌트 레이아웃
 */
import Head from 'next/head';
import React, { ReactNode, useMemo } from 'react';
import { useColorMode } from '@chakra-ui/color-mode';

import { Box } from "@chakra-ui/layout";
import BackHeaderComponent from './BackHeader';

interface PageProps {
  title?: string;
  leftSideComponent?: ReactNode;
}

const BackPage: React.FC<PageProps> = ({ title, children, leftSideComponent }) => {
  const { colorMode } = useColorMode();

  const ThemeBG = useMemo(() => {
    switch (colorMode) {
      case 'dark':
      case 'light':
        return 'transparent';
      default:
        return 'rgba(179, 44, 243, 0.85)';
    }
  },[colorMode]);

  return (
    <Box bg={{ sm: ThemeBG, lg: ThemeBG }} position="relative">
      <Head>
        <title>{title} - Digging</title>
      </Head>
      {/* 헤더 */}
      <BackHeaderComponent leftSideComponent={leftSideComponent} />

      <main>
        {children}
      </main>
    </Box>
  );
};
export default BackPage;