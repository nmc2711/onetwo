import { fetchJson } from './api';

import { Product } from '../@types/product'; //이걸로 바꿔야 할듯
import { baseApiUrl } from '../enum/config';

export async function getProduct(id: string): Promise<Product> {
  const product = await fetchJson(`${baseApiUrl}/products/${id}`);
  return stripProduct(product);
}

export async function getProducts(): Promise<Product[]> {
  const products = await fetchJson(`${baseApiUrl}/products`);
  return products.map(stripProduct);
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