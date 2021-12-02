/**
 * @title : Page HomePage - 메인페이지
 */
import type { NextPage } from "next";
import { getProducts } from "../lib/products";
import ProductCard from "../components/ProductCard";
import Page from "../components/common/Page";

// SideEffect
export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products, revalidate: 5 * 60 } };
}

const HomePage: NextPage = ({ products }: any) => {
  return (
    <Page title="내 푸드메이트는 어디에 있을까? 헛둘!">
      <ul className="flex flex-wrap justify-between">
        {products.map((product: any) => (
          <li className="__list" key={product.id} >
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </Page>
  );
};
export default HomePage;
