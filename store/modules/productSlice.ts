import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  id: 0,
  title: '',
} as const

/**
 * @description action과 redecer를 한 번에 정의하여(=createSlice)
 * 다른 컴포넌트에서 사용하도록 리듀서와 액션생성함수를 export 시킨다
 */

const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setProduct: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState>) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
    },
    resetProduct: (state: Draft<typeof initialState>) => {
      state = initialState;
    },
  }
});

export const getProductItem = (state: any) => state.product;

export const { setProduct, resetProduct } = productSlice.actions; //액션 생성함수

export default productSlice.reducer; //리듀서