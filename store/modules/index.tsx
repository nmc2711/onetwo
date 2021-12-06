import { combineReducers, PayloadAction } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

import productSlice from './productSlice';

/**
 * 
 * @description modules내 정의한 모듈들 합쳐주는 component  
 * HYDRATE라는 액션을 통해서 서버의 스토어와 클라이언트의 스토어를 합쳐준다
 */

const reducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    return {
      ...state,
      ...action.payload,
    };
  }
  return combineReducers({
    productSlice,
  })(state, action);
}

export default reducer;
