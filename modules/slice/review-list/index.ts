import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Product } from '../../../@types/product';

//slice 안에 들어갈 내용은 name, init, reducers

//리덕스는 root reducer 객체를 가지고 있는데 이 객체의 key/ value쌍을 slice 라고 한다  요걸 업데이트 하는 reducer 함수가 slice reducer
//immer

export interface List {
  title: string,
  name: string,
};

export const reviewListSlice = createSlice({
  name: 'reviewList',
  initialState: [
    { title: '김밥', name: '이은지' }
  ] as List[],

  reducers: {
    //액션타입은 슬라이스 이름을 접두어로 사용해서 자동 생성 

    addList: (state, action: PayloadAction<List>) => {
      const { title, name } = action.payload;
      state.push({ title, name });
    },
  },
});

//위에 작성이 끝났다면 액션과 리듀서를 export 해준다. 
// export const { addUser } = users.actions;
// export default users.reducer;
const { actions, reducer } = reviewListSlice;
export const { addList } = actions;

export default reducer;
