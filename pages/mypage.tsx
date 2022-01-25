/**
 * @title : Page MyPage - 마이페이지
 */
import type { NextPage } from "next";
import Page from 'components/common/Page';

import Head from "next/head";

const MyPage: NextPage = () => {
  return (
    <Page title="헛둘 마이페이지">
      <Head>
        <title>마이페이지</title>
        <meta name="description" content="푸렌드 마이페이지" />
      </Head>

      <h1>마이페이지</h1>

    </Page>
  );
};
export default MyPage;
