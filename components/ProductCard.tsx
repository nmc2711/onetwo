
import Link from 'next/link';
import React from 'react';

// toolkit
import { useDispatch } from 'react-redux';
import { setProduct } from '../store/modules/productSlice';

import Image from 'next/image';

interface Props {
  product: any;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div className="border w-80 shadow hover:shadow-xl" style={{ height: '340px' }} onClick={() => dispatch(setProduct({ id: product.id, title: product.title }))}>
      <Link href={`/products/${product.id}`}>
        <a>
          {product.pictureUrl && <Image src={product.pictureUrl} alt="음식점 이미지" width={320} height={240} />}
          <div className="p-2 flex justify-between items-baseline" >
            <h2 className="text-lg font-bold">
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
