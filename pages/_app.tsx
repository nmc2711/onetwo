/**
 * @title : Page Root _app - View Controller
 */

import type { AppProps } from "next/app";
import { Fragment } from 'react';

import Head from 'next/head';
//c
import Navbar from "../components/common/Navbar";

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      {/* 브라우저 탭 */}
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      {/* 공통 네비게이션 */}
      <header>
        <Navbar />
      </header>

      {/* 뷰 */}
      <Component {...pageProps} />
    </Fragment>
  );
}
export default MyApp;
