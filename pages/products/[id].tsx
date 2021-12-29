/**
 * @title : ProductPage - 음식점 디테일 페이지
 */
import type { NextPage } from "next";
import { getProducts, getProduct } from "../../lib/products";

// c
import { ImageW100 } from '../../styles/customStyle';
import { ApiError } from "../../lib/api";
import Page from "../../components/common/Page";

// toolkit
import { useSelector, useDispatch } from 'react-redux';
import { getProductItem, setProduct } from '../../redux/slices/productSlice'
import { useUser } from "../../hooks/user";

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
  const productRedux = useSelector(getProductItem);
  return (
    <Page title={product.title}>
      <div className="flex flex-col lg:flex-row">
        <div>
          {product.pictureUrl && <ImageW100 alt="상세 페이지 이미지" src={product.pictureUrl} h={360} />}
        </div>

        <div className="flex-1 lg:ml-4">
          <p className="text-sm">{product.description}</p>
          <p className="text-lg font-bold mt-2">최저 음식 금액: {product.price}</p>
        </div>

      </div>
    </Page>
  );
}
export default ProductPage;
