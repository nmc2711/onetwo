import { Product } from "../../../@types/product";

export const reset: TState = {
  list: [
    {
      id: 0,
      title: '',
      description: '',
      price: '',
      pictureUrl: '',
    }
  ],
}

export type TState = {
  list: [
    {
      id: number;
      title: string;
      description: string;
      price: string;
      pictureUrl: string;
    }
  ]
}

export default Object.assign(
  {},
  reset,
);
