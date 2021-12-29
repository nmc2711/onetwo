import {
    Action,
    AnyAction,
    combineReducers,
    configureStore,
    ThunkAction,
  } from '@reduxjs/toolkit';
  import { createWrapper, HYDRATE } from 'next-redux-wrapper';
  import { counterReducer } from '../features/counter';
  
  const combinedReducer = combineReducers({
    counter: counterReducer,
  });
  
  const reducer = (state: any, action: AnyAction) => {
    if (action.type === HYDRATE) {
      const nextState = {
        ...state,
        ...action.payload,
      };
      return nextState;
    } else {
      return combinedReducer(state, action);
    }
  };
  
  export const makeStore = () =>
    configureStore({
      reducer,
    });
  
  type Store = ReturnType<typeof makeStore>;
  
  export type AppDispatch = Store['dispatch'];
  export type RootState = ReturnType<Store['getState']>;
  export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
  >;
  
  export const wrapper = createWrapper(makeStore, { debug: true });
  
