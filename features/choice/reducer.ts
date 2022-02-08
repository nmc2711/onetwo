import { createReducer } from '@reduxjs/toolkit';
import { checker } from './actions';

type ChoiceState = {
  value: boolean;
};

const initialState: ChoiceState = {
  value: false,
};

export const choiceReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(checker, (state) => {
      state.value = true;
    })
});
