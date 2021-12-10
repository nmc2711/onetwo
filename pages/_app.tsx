/**
 * @title : Page Root _app - View Controller
 */

import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from "react-query";

import store from "../redux/store";
import Head from 'next/head';

import useCheckOs from '../components/utility/getCheckOs';
import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const isMobil = useCheckOs();
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient} >
        {/* 브라우저 탭 */}
        <Head>
          <link rel="icon" href="/icons/favicon.ico" />
        </Head>

        {/* 뷰 */}
        <Component {...pageProps} isMobil ={isMobil}/>
      </QueryClientProvider>
    </Provider>
  );
}

export default MyApp;
