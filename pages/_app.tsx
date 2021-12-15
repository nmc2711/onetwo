/**
 * @title : Page Root _app - View Controller
 */

import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from "react-query";
import { ThemeProvider } from 'styled-components'

import store from "../redux/store";
import Head from 'next/head';

import useCheckOs from '../components/utility/getCheckOs';
import { theme } from '../styles/theme';
import "../styles/globals.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  const isMobil = useCheckOs();
  console.log("****", isMobil)
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient} >
          <Head>
            <link rel="icon" href="/icons/favicon.ico" />
          </Head>
          <Component {...pageProps} isMobil={isMobil} />
        </QueryClientProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default MyApp;
