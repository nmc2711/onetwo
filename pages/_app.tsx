/**
 * @title : 모든 컴포넌트의 Root INDEX - _app.tsx
 * @purpose : Redux, Query, Style 등 공통으로 사용될 Provider 또는 전역 모듈을 설정할 수 있다.
 */
import { useEffect } from 'react';
import type { AppProps } from "next/app";

import { QueryClientProvider } from "react-query";
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import { queryClient } from '../apiCall/queryClient';

import { wrapper } from '../toolkit/store';

import Head from 'next/head';

import "../styles/globals.css";
import theme from "../styles/theme";
const { Kakao }: any = typeof window !== "undefined" &&  window;
function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    Kakao.init("30653f7c73c422920b2f184e8e96e652");
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <QueryClientProvider client={queryClient}>
          {/* Browser Tab 접근성 */}
          <Head>
            <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css" />
            <link rel="icon" href="/icons/favicon.ico" />
            <script defer src="https://developers.kakao.com/sdk/js/kakao.min.js"></script>
          </Head>

          {/* Child Components */}
          <Component {...pageProps} />
        </QueryClientProvider>
    </ChakraProvider>
  );
}
export default wrapper.withRedux(MyApp);
