/**
 * @title : 페이지 공통 컴포넌트
 */
import Head from 'next/head';
import React, { useMemo } from 'react';

import HeaderComponent from './Header';

import { Box } from "@chakra-ui/layout";
import { useColorMode } from '@chakra-ui/color-mode';

interface PageProps {
  title?: string;
}

const Page: React.FC<PageProps> = ({ title, children }) => {
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
    <Box bg={{ sm: ThemeBG, lg: ThemeBG }}>
      <Head>
        <title>{title} - Digging</title>
      </Head>
      {/* 헤더 */}
      <HeaderComponent />

      <main>
        {children}
      </main>
    </Box>
  );
};
export default Page;