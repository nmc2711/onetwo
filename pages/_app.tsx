/**
 * @title : Page Root _app - View Controller
 */

import type { AppProps } from "next/app";
import { wrapper } from "../store";

import Head from 'next/head';

import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* 브라우저 탭 */}
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>

      {/* 뷰 */}
      <Component {...pageProps} />
    </>
  );
}

//이 작업을 통해서 getInitialProps, getServerSideProps등의 함수 내에서 스토어 접근 가능해짐
export default wrapper.withRedux(MyApp);
