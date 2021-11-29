import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  id: '',
  title: '',
} as const;

export const productSlice = createSlice({
  name: 'productSlice',
  initialState,
  reducers: {
    setProduct: (state: Draft<typeof initialState>, action: PayloadAction<typeof initialState>) => {
      state.id = action.payload.id;
      state.title = action.payload.title;
    },
    resetProduct: (state: Draft<typeof initialState>) => {
       state = initialState;
    }
  }
});

export const getProduct = (state: any) => state.product;

export const { setProduct, resetProduct } = productSlice.actions;

export default productSlice.reducer;