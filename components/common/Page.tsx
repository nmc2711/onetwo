/**
 * @title : 페이지 공통 컴포넌트
 */

import Head from 'next/head';
import React from 'react';
import NavBar from './Navbar'
import Title from './Title';
interface PageProps {
  title: string;
}

const Page: React.FC<PageProps> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title} - 헛둘페이지</title>
      </Head>
      <header>
        <NavBar />
      </header>
      <main className="px-6 py-4">
        <Title>{title}</Title>
        {children}
      </main>
    </>
  );
};
export default Page;