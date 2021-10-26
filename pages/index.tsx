/**
 * @title : Page HomePage - 메인페이지
 */
import Link from "next/link";
import type { NextPage } from "next";

import { getProducts } from "../lib/products";
// c
import Head from "next/head";
import Title from "../components/common/Title";
import ProductCard from "../components/ProductCard";

// SideEffect
export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products, revalidate: 5 * 60 } };
}

const HomePage: NextPage = ({ products }: any) => {
  return (
    <div>
      <Head>
        <title>내 푸드메이트는 어디에 있을까? 헛둘!</title>
        <meta name="description" content="헛둘 메인페이지" />
      </Head>

      <main className="px-6 py-4">
        <Title>새 푸렌드를 찾아보자!</Title>
        <ul className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {products.map((product: any) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
        </ul>
      </main>
    </div>
  );
};
export default HomePage;
