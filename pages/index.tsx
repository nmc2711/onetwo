/**
 * @title : 메인페이지
 * @path : '/'
 */
import type { NextPage } from "next";
import { useState, useRef, useEffect } from 'react';

import { getProducts } from "../lib/products";

import ProductCard from "../components/ProductCard";
import Page from "../components/common/Page";

//style
import { ResponsiveBox } from '../styles/customStyle';
import FirstReviewBanner from "../components/common/AdBanner/review";

import viewScroll from '../components/utility/viewScroll';

// SideEffect
export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products, revalidate: 5 * 60 } };
}

const HomePage: NextPage = ({ products }: any) => {
  const { target, itemLists, setTarget } = viewScroll();

  return (
    <Page title="내 푸드메이트는 어디에 있을까? 헛둘!">
      <FirstReviewBanner />
      <ResponsiveBox>
        <style jsx>{`
        div { 
          border: 1px solid;
          width: 100%;
          height: 300px;
          margin-bottom: 30px;
        }
      `}</style>
        {itemLists.map((item, idx) => {
          return (
            <>
              <div key={idx}> {1 + idx}</div>
            </>
          )
        })}
        {/* {products.map((product: any) => (
          <ProductCard product={product} key={product.id} />
        ))} */}
        <div ref={setTarget} />
      </ResponsiveBox>
    </Page>
  );
};
export default HomePage;

// ** Description
// Next JS의 Pre-Render 패턴 getStaticProps, getServerSideProps가 주로 쓰인다.
