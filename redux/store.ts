import { configureStore } from '@reduxjs/toolkit';

import productReducer from './slices/productSlice';

export default configureStore({
  reducer: {
    user: productReducer,
  },
});