import { fetchJson } from '../../lib/api';

export async function getDetail() {
  try {
    const reviews = await fetchJson('/api/v1/reviews/1');
    console.log("reviews ::::", reviews);
  } catch (error) {
    console.log("err", error)
  }

  // return stripProduct(product);
}

// function stripProduct(product: any): Product {
//   return {
//     id: product.id,
//     title: product.title,
//     description: product.description,
//     price: Math.ceil(product.price.toFixed(2)) + '원',
//     pictureUrl: product.picture ? baseApiUrl + product.picture.url : '',
//   };
// }