/**
 * @title : 페이지 공통 컴포넌트
 */

import Head from 'next/head';
import React, { useMemo } from 'react';
import NavBar from './Navbar';
import Title from './Title';

import { Box } from "@chakra-ui/layout";
import { useColorMode } from '@chakra-ui/color-mode';

interface PageProps {
  title: string;
}

const Page: React.FC<PageProps> = ({ title, children, }) => {
  const { colorMode } = useColorMode();

  const ThemeBG = useMemo(() => {
    switch (colorMode) {
      case 'dark':
      case 'light':
        return 'transparent';
      default:
        return 'gray';
    }
  },[colorMode]);

  return (
    <Box bg={{ ThemeBG }}>
      <Head>
        <title>{title} - 헛둘페이지</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main>
        <Title>{title}</Title>
        {children}
      </main>
    </Box>
  );
};
export default Page;