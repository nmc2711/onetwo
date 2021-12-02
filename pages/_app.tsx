/**
 * @title : Page Root _app - View Controller
 */

import type { AppProps } from "next/app";

import { Provider } from 'react-redux';

import store from "../redux/store";

import Head from 'next/head';

import "../styles/globals.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Provider store={store}>
      {/* 브라우저 탭 */}
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      {/* 뷰 */}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
