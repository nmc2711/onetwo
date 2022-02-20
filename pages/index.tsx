/**
 * @title : 메인페이지
 * @path : '/'
 */
import { useState, useRef } from 'react';
import { getProducts } from "apiCall/feature/products";
import { GetServerSideProps } from 'next';
// toolkit
import { useAppSelector } from 'toolkit/hooks';

import { REVIEWS_TYPE, RESULT_IN_LIST } from '../types/reviewList'; 
import Infinity from 'hooks/infiniteScroll';

import Page from "components/Page";
import Banner from "components/AdBanner";

import ChoiceTaste from "pageSlice/choiceTaste";
import ShopReviews from 'pageSlice/shopReviewList';

//style
import { ResponsiveBox } from 'styles/customStyle';

interface ReviewProps {
  products: REVIEWS_TYPE;
}

// SideEffect
export const getServerSideProps: GetServerSideProps<ReviewProps> = async () => {
  const products = await getProducts({ tags:'NO_KIDS_ZONE', tag: 'CHEAP', page: 1, limit: 5, lastId: '' });
  return { props: { products, revalidate: 5 * 60 } };
}

const HomePage: React.FC<ReviewProps> = ({ products }) => {
  const { result } = products;
  const ref = useRef<HTMLDivElement | null>(null);

  const [list, setList] = useState(result.list);
  const [rid, setRid] = useState(result.lastId);
  
  const { value } = useAppSelector((state) => state.choice);
  
  const scrollCallback = async() => {
    const scrolls = await getProducts({ tags:'NO_KIDS_ZONE', tag: 'CHEAP', page: 1, limit: 5, lastId: '' });
    setList(list.concat(scrolls.result.list));
    setRid(scrolls.result.lastId);
  }

  return (
    value ? 
    <Page title="All reviews are there Digging !">
      <Banner />
      <ResponsiveBox>
        {result && list.map((item: RESULT_IN_LIST, idx: number) => {
          return (
            <Infinity
              ref={ref}
              itemkey={idx}
              leng={list.length}
              callback={scrollCallback}
              key={idx}>
              <ShopReviews item={item} />
            </Infinity>
          )
        })}
      </ResponsiveBox>
    </Page>
    :
    <ChoiceTaste />
  );
};
export default HomePage;