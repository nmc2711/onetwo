
import Link from 'next/link';
import React from 'react';

import { Box, Flex } from "@chakra-ui/react";

import { ImageW100 } from '../styles/customStyle';
import Tumbnail from '../components/common/tumbnails';

interface ProductCardProps {
  product: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Box h="340px" borderWidth='1px' mb='8px'>
      <Link href={`/products/${product.id}`}>
        <a>
          {product.pictureUrl && <Tumbnail img={product.pictureUrl} />}
          <Flex p="0.5em" basis="base-line" justify="center" direction="column" >
            <h2 className="text-lg font-bold">
              {product.title}
            </h2>
            <span>
              최소금액(깃 테스트--) {product.price}
            </span>
          </Flex>
        </a>
      </Link>
    </Box>
  );
};

export default ProductCard;