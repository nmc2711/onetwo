import { fetchJson } from '../../lib/api';

import { qs } from 'lib/qs';

export async function postImgUpload(params: any) {
  const products = await fetchJson(qs('images', params));
  return products;
}
