import { createReducer } from '@reduxjs/toolkit';
import { decrement, increment } from './actions';

type CounterState = {
  value: number;
};

const initialState: CounterState = {
  value: 0,
};

export const counterReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(increment, (state) => {
      state.value++;
    })
    .addCase(decrement, (state) => {
      state.value--;
    })
});
