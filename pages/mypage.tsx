/**
 * @title : Page MyPage - 마이페이지
 */
import type { NextPage } from "next";
import Page from 'components/common/Page';

import Head from "next/head";

import Image from 'next/image';

import CrossThumbImg from 'asset/background/cross_thumb.png';

const MyPage: NextPage = () => {
  return (
    <Page title="헛둘 마이페이지">
      <Head>
        <title>마이페이지</title>
        <meta name="description" content="푸렌드 마이페이지" />
      </Head>

      <div>
        Static 이미지 테스트
        <Image src={CrossThumbImg} width={500} height={500} />
      </div>

    </Page>
  );
};
export default MyPage;
