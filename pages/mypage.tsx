/**
 * @title : Page MyPage - 마이페이지
 */
import type { NextPage } from "next";

import { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';


import Page from '../components/common/Page';

import Head from "next/head";
import { List, addList } from '../modules/slice/review-list';

const MyPage: NextPage = () => {

  const [title, setTitle] = useState('');
  const list = useSelector(({ state }: any) => state.reviewList);
  const dispatch = useDispatch();

  console.log(list);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setTitle(e.currentTarget.value);
  }

  function handleToSubmit() {
    dispatch(addList({ title } as List));
  }

  return (
    <Page title="헛둘 마이페이지">
      <Head>
        <title>마이페이지</title>
        <meta name="description" content="푸렌드 마이페이지" />
      </Head>

      <h1>마이페이지</h1>
      <div onSubmit={handleToSubmit}>
        <p>왜</p>
        <input value={title} onChange={handleChange} />
      </div>
    </Page>
  );
};
export default MyPage;
