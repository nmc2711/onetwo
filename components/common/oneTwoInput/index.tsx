import React from 'react';
import { Props, defaultProps, NativeAttrs } from '../../type/oneTwoInputProps';

export type InputProps = Props & NativeAttrs;

const OneTwoInput = React.forwardRef<
  HTMLInputElement,
  React.PropsWithChildren<InputProps>
>(({

}) => {
  return (
    <></>
  );
});

export default OneTwoInput;
