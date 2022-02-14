import { fetchJson } from '../../lib/api';

import { Product } from '../../types/product'; //이걸로 바꿔야 할듯
import { baseApiUrl } from '../../enum/config';

export async function getProduct(id: string): Promise<Product> {
  const product = await fetchJson(`${baseApiUrl}/products/${id}`);
  return stripProduct(product);
}

export async function getProducts() {
  const products = await fetchJson(`http://ec2-54-180-30-10.ap-northeast-2.compute.amazonaws.com:5510/api/v1/reviews?tags=NO_KIDS_ZONE&tags=CHEAP&page=1&limit=5&lastId=`);
  return products;
}

function stripProduct(product: any): Product {
  return {
    id: product.id,
    title: product.title,
    description: product.description,
    price: Math.ceil(product.price.toFixed(2)) + '원',
    pictureUrl: product.picture ? baseApiUrl + product.picture.url : '',
  };
}