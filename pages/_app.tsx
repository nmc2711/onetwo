/**
 * @title : 모든 컴포넌트의 Root INDEX - _app.tsx
 * @purpose : Redux, Query, Style 등 공통으로 사용될 Provider 또는 전역 모듈을 설정할 수 있다.
 */
import type { AppProps } from "next/app";

import { QueryClientProvider } from "react-query";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { queryClient } from '../apiCall/queryClient';

import { wrapper } from '../toolkit/store';

import Head from 'next/head';

import "../styles/globals.css";
import theme from "../styles/theme";


function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <QueryClientProvider client={queryClient}>
          {/* Browser Tab 접근성 */}
          <Head>
            <link rel="icon" href="/icons/favicon.ico" />
          </Head>

          {/* Child Components */}
          <Component {...pageProps} />
        </QueryClientProvider>
    </ChakraProvider>
  );
}
export default wrapper.withRedux(MyApp);
