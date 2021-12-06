import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import reducer from './modules';

//configureStore: store 생성 
const makeStore = (context: any) => configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

//createWrapper: wrapper 생성
export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== 'production',
});
