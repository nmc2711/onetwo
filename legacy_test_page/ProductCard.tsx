
import Link from 'next/link';
import React from 'react';

import { Box, Flex } from "@chakra-ui/react";

import { ImageW100 } from '../styles/customStyle';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box h="340px" borderWidth='1px' mb='8px'>
      <Link href={`/products/${product.id}`}>
        <a>
          {product.pictureUrl && <ImageW100 src={product.pictureUrl} alt="음식점 이미지" h="240px" />}
          <Flex p="0.5em" basis="base-line" justify="center" direction="column" >
            <h2 className="text-lg font-bold">
              {product.title}
            </h2>
            <span>
              최소금액 {product.price}
            </span>
          </Flex>
        </a>
      </Link>
    </Box>
  );
};

export default ProductCard;