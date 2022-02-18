/**
 * @title : Page MyPage - 마이페이지
 */
import type { NextPage } from "next";

import Page from 'components/Page';
import Head from "next/head";

const MyPage: NextPage = () => {
  return (
    <Page title="헛둘 마이페이지">
      <Head>
        <title>마이페이지</title>
        <meta name="description" content="digging 마이페이지" />
      </Head>

      <div>준비중인 페이지 입니다.</div>

    </Page>
  );
};
export default MyPage;
