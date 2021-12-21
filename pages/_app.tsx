/**
 * @title : 모든 컴포넌트의 Root INDEX - _app.tsx
 * @purpose : Redux, Query, Style 등 공통으로 사용될 Provider 또는 전역 모듈을 설정할 수 있다.
 */
import type { AppProps } from "next/app";

import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from "react-query";

import store from "../redux/store";

import Head from 'next/head';

import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>

        {/* Browser Tab 접근성 */}
        <Head>
          <link rel="icon" href="/icons/favicon.ico" />
        </Head>

        {/* Child Components */}
        <Component {...pageProps} />

      </QueryClientProvider>
    </Provider>
  );
}
export default MyApp;
