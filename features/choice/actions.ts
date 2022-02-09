import { createAction } from '@reduxjs/toolkit';

export const checker = createAction('counter/checker');
export const changeSteps = createAction<number>('counter/changeSteps');
export const changeChoiceInfo = createAction<{[key: string]: string}>('counter/changeChoiceInfo');
