
import Link from 'next/link';
import React from 'react';

// toolkit
import { useDispatch } from 'react-redux';
import { setProduct } from '../redux/slices/productSlice';

import Image from 'next/image';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(setProduct({ id: product.id, title: product.title }))}>
      <Link href={`/products/${product.id}`}>
        <a>
          <div className="md:flex-shrink-0">
            {product.pictureUrl && <img className="w-96 h-96 object-cover sm:w-4 md:w-80 lg:w-100 xl:w-80" src={product.pictureUrl} alt="음식점 이미지" />}
          </div>
          <div className="p-2">
            <h2 className="text-lg font-bold">
              {product.title}
            </h2>
            <p>최소금액 {product.price}</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ProductCard;