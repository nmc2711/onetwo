/**
 * @title : 메인페이지
 * @path : '/'
 */
import { getProducts } from "lib/products";
import { GetServerSideProps } from 'next';

// toolkit
import { useAppSelector } from 'toolkit/hooks';

import Page from "components/common/Page";
import Banner from "components/common/AdBanner";

import ChoiceTaste from "pageSlice/choiceTaste";
import ShopReviews from 'pageSlice/shopReviewList';

//style
import { ResponsiveBox } from 'styles/customStyle';

import { REVIEWS_TYPE, RESULT_IN_LIST } from '../types/reviewList'; 

interface ReviewProps {
  products: REVIEWS_TYPE;
}

// SideEffect
export const getServerSideProps: GetServerSideProps<ReviewProps> = async () => {
  const products = await getProducts();
  return { props: { products, revalidate: 5 * 60 } };
}

const HomePage: React.FC<ReviewProps> = ({ products }) => {
  const { result } = products;
  const { value } = useAppSelector((state) => state.choice);

  return (
    value ? 
    <Page title="All reviews are there Digging !">
      <Banner />
      <ResponsiveBox>
        {result && result.list.map((item: RESULT_IN_LIST, idx: number) => {
          return (
            <div key={idx + '리뷰 인덱스'}>
              <ShopReviews item={item} />
            </div>
          )
        })}
      </ResponsiveBox>
    </Page>
    :
    <ChoiceTaste />
  );
};
export default HomePage;