
import Link from 'next/link';
import React from 'react';

// toolkit
import { useSelector, useDispatch } from 'react-redux';
import { getProduct, setProduct } from '../redux/slices/productSlice';

import Image from 'next/image';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const productRedux = useSelector(getProduct);

  console.log('redux에 저장된거 리스트 제목클릭하세여..', productRedux);

  return (
    <div className="border w-80 shadow hover:shadow-xl" style={{ height: '340px' }}>
      <Link href={`/products/${product.id}`}>
        <a>
          {product.pictureUrl && <Image src={product.pictureUrl} alt="음식점 이미지" width={320} height={240} />}
          <div className="p-2 flex justify-between items-baseline" >
            <h2 className="text-lg font-bold" onClick={() => dispatch(setProduct({ id: product.id, title: product.title }))}>
              {product.title}
            </h2>
            <span>
              최소금액 {product.price}
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;