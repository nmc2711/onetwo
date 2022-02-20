import { fetchJson } from '../../lib/api';

import { Product } from '../../types/product'; //이걸로 바꿔야 할듯
import { baseApiUrl } from '../../enum/config';

import { qs } from 'lib/qs';

export async function getProduct(id: string): Promise<Product> {
  const product = await fetchJson(`${baseApiUrl}/products/${id}`);
  return stripProduct(product);
}

export async function getProducts(params: any) {
  const products = await fetchJson(qs('reviews', params), {
    method: 'GET',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
  });
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