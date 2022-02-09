import { createReducer } from '@reduxjs/toolkit';
import { checker, changeSteps, changeChoiceInfo } from './actions';

type TChoiceInfo = {
  gender: String, //female, male, noCheck
  price: String, // check, noCheck
  alchole: String, // like, dislike
  health: String, // check,
  sound: String, // check, dizzy
  time: String, // early, later
};

type ChoiceState = {
  value: boolean;
  steps: number;
  choiceInfo: TChoiceInfo;
};

const initialState: ChoiceState = {
  value: false,
  steps: 1,
  choiceInfo: {
    gender: '',
    price: '',
    alchole: '',
    health: '',
    sound: '',
    time: ''
  },
};

export const choiceReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(checker, (state) => {
      state.value = true;
    })
    .addCase(changeSteps, (state, action) => {
      console.log(action.payload);
      state.steps = action.payload;
    })
    .addCase(changeChoiceInfo, (state, action) => {
      state.choiceInfo =  { ...state.choiceInfo, ...action.payload };
   })
});
