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
import Banner from "components/common/AdBanner";

import ChoiceTaste from "pageSlice/choiceTaste";
import ShopReviews from 'pageSlice/shopReviewList';

//style
import { ResponsiveBox } from 'styles/customStyle';

// SideEffect
export async function getServerSideProps() {
  const products = await getProducts();
  return { props: { products, revalidate: 5 * 60 } };
}

const HomePage: NextPage = ({ products }: any) => {
  console.log(products)
  const { value } = useAppSelector((state) => state.choice);

  return (
    value ? 
    <Page title="All reviews are there Digging !">
      <Banner />
      <ResponsiveBox>
        <ShopReviews />
        <ShopReviews />
        <ShopReviews />
        <ShopReviews />
        <ShopReviews />
        <ShopReviews />
        
        {/* {products.map((product: any) => (
          <ProductCard product={product} key={product.id}/>
        ))} */}
      </ResponsiveBox>
    </Page>
    :
    <ChoiceTaste />
  );
};
export default HomePage;