/**
 * @title : 메인페이지
 * @path : '/'
 */
import type { NextPage } from "next";
import { getProducts } from "lib/products";

// toolkit
import { useAppSelector } from 'toolkit/hooks';

import ProductCard from "components/ProductCard";
import Page from "components/common/Page";
import FirstReviewBanner from "components/common/AdBanner/review";
import ChoiceTaste from "pageSlice/choiceTaste"

//style
import { ResponsiveBox } from 'styles/customStyle';

// SideEffect
export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products, revalidate: 5 * 60 } };
}

const HomePage: NextPage = ({ products }: any) => {
  const { value } = useAppSelector((state) => state.choice);

  return (
    value ? 
    <Page title="All reviews are there Digging !">
      <FirstReviewBanner />
      <ResponsiveBox>
        {products.map((product: any) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </ResponsiveBox>
    </Page>
    :
    <ChoiceTaste />
  );
};
export default HomePage;