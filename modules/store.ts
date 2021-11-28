import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { HYDRATE, createWrapper } from "next-redux-wrapper";

import reviewList from './slice/review-list';


export const reducer = (state: any, action: any) => {
  //서버에서 저장한 store랑 클라이언트에서 저장한 store랑 다르기 때문에 합치는 작업
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    reviewList,
  })(state, action);
};

//유저가 요청할 때마다 새로운 store 생성 도와주는..
const makeStore = () =>
  configureStore({
    reducer,
  });

export const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV !== "production",
});