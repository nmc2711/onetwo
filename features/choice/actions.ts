import { createAction } from '@reduxjs/toolkit';

export const checker = createAction('choice/checker');
export const changeSteps = createAction<number>('choice/changeSteps');
export const changeChoiceInfo = createAction<{[key: string]: string}>('choice/changeChoiceInfo');
