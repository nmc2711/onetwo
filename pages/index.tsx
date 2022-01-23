/**
 * @title : 메인페이지
 * @path : '/'
 */
import type { NextPage } from "next";
import { useInView } from 'react-intersection-observer';

import { getProducts } from "../lib/products";

import ProductCard from "../components/ProductCard";
import Page from "../components/common/Page";

//style
import { ResponsiveBox } from '../styles/customStyle';
import FirstReviewBanner from "../components/common/AdBanner/review";

// SideEffect
export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products, revalidate: 5 * 60 } };
}

const HomePage: NextPage = ({ products }: any) => {
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <Page title="내 푸드메이트는 어디에 있을까? 헛둘!">
      <FirstReviewBanner />
      <ResponsiveBox ref={ref}>
        {products.map((product: any) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </ResponsiveBox>
    </Page>
  );
};
export default HomePage;

// ** Description
// Next JS의 Pre-Render 패턴 getStaticProps, getServerSideProps가 주로 쓰인다.
