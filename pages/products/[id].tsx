/**
 * @title : ProductPage - 음식점 디테일 페이지
 */
import type { NextPage } from "next";
import { getProducts, getProduct } from "../../lib/products";

// c
import Head from "next/head"; 
import Title from "../../components/common/Title";
import { ApiError } from "../../lib/api";

export async function getStaticPaths() {
  const products = await getProducts();
  return {
    paths: products.map((product: any) => ({
      params: { id: product.id.toString() },
    })),
    fallback: 'blocking',
    // 새 요청
  };
}

export async function getStaticProps({ params: { id } }: any) {
  try {
    const product = await getProduct(id);
    return {
      props: { product },
      revalidate: 30,
    };
  } catch (err) {
    if (err instanceof ApiError && err.status === 404) {
      return { notFound: true };
    }
    throw err;
  }

}

const ProductPage: NextPage = ({ product }: any) => {
  console.log(product)
  return (
    <>
      <Head>
        <title>{product.title} 상세 페이지</title>
        <meta name="description" content="헛둘 디테일 페이지" />
      </Head>

      <main className="px-2 py-1">
        <Title>{product.title}</Title>
        <p>{product.description}</p>
      </main>
    </>
  );
}
export default ProductPage;
