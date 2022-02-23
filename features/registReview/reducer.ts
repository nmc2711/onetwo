import { createReducer } from '@reduxjs/toolkit';
import { changeReviewSteps } from './actions';

type RegistReviewState = {
  steps: number;
};

const initialState: RegistReviewState = {
  steps: 1,
};

export const registReviewReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeReviewSteps, (state, action) => {
      state.steps = action.payload;
    })
});
